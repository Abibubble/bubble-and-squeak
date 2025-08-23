#!/bin/bash

# Accessibility Testing Script for Bubble & Squeak
echo "Running Accessibility Tests for Bubble & Squeak..."
echo "================================================="

# Function to check if server is running
check_server() {
    if curl -s http://localhost:3000 > /dev/null 2>&1; then
        echo "Development server is running"
        return 0
    else
        echo "Development server is not running at localhost:3000"
        echo "Please start the server with: npm start"
        return 1
    fi
}

# Function to run ESLint accessibility checks
run_eslint_a11y() {
    echo ""
    echo "Running ESLint accessibility checks..."
    npm run lint:a11y 2>&1 | tee eslint-a11y-report.txt
    if [ ${PIPESTATUS[0]} -eq 0 ]; then
        echo "ESLint accessibility check passed"
    else
        echo "ESLint found accessibility issues - check eslint-a11y-report.txt"
    fi
}

# Function to run axe-core tests
run_axe_tests() {
    echo ""
    echo "Running axe-core accessibility tests..."

    # Test different pages
    declare -a pages=("/" "/theme-parks" "/rides" "/escape-rooms")

    for page in "${pages[@]}"; do
        page_name=$(echo $page | sed 's/\//-/g' | sed 's/^-//')
        if [ "$page_name" = "" ]; then
            page_name="home"
        fi

        echo "Testing $page..."
        if command -v axe &> /dev/null; then
            axe "http://localhost:3000$page" --save "axe-${page_name}-report.json" 2>/dev/null || echo "⚠️  axe test failed for $page"
        else
            echo "axe-core CLI not available globally"
        fi
    done
}

# Function to run Lighthouse accessibility audit
run_lighthouse() {
    echo ""
    echo "Running Lighthouse accessibility audit..."

    if command -v lighthouse &> /dev/null; then
        lighthouse http://localhost:3000 \
            --only-categories=accessibility \
            --output=json \
            --output-path=./lighthouse-a11y-report.json \
            --chrome-flags="--headless --no-sandbox --disable-gpu" \
            --quiet

        if [ $? -eq 0 ]; then
            echo "Lighthouse accessibility audit completed"
            # Extract score from JSON
            if command -v node &> /dev/null; then
                score=$(node -e "
                    try {
                        const report = require('./lighthouse-a11y-report.json');
                        const score = Math.round(report.categories.accessibility.score * 100);
                        console.log(score);
                    } catch(e) {
                        console.log('N/A');
                    }
                ")
                echo "Accessibility Score: ${score}/100"
            fi
        else
            echo "Lighthouse audit failed"
        fi
    else
        echo "Lighthouse not available - install with: npm install -g lighthouse"
    fi
}

# Function to generate summary report
generate_summary() {
    echo ""
    echo "Generating accessibility summary..."

    cat > accessibility-test-results.md << EOF
# Accessibility Test Results

**Test Date**: $(date)
**Site**: Bubble & Squeak (http://localhost:3000)

## Test Results Summary

### ESLint Accessibility Check
$(if [ -f eslint-a11y-report.txt ]; then
    if grep -q "error" eslint-a11y-report.txt; then
        echo "Issues found - see eslint-a11y-report.txt"
    else
        echo "No accessibility issues found"
    fi
else
    echo "Not run"
fi)

### axe-core Tests
$(for file in axe-*-report.json; do
    if [ -f "$file" ]; then
        page=$(echo "$file" | sed 's/axe-//' | sed 's/-report.json//')
        echo "- $page: Tested"
    fi
done
if [ ! -f axe-home-report.json ]; then
    echo "axe-core tests not run"
fi)

### Lighthouse Accessibility Audit
$(if [ -f lighthouse-a11y-report.json ]; then
    echo "Completed - see lighthouse-a11y-report.json"
    if command -v node &> /dev/null; then
        score=\$(node -e "
            try {
                const report = require('./lighthouse-a11y-report.json');
                const score = Math.round(report.categories.accessibility.score * 100);
                console.log('Score: ' + score + '/100');
            } catch(e) {
                console.log('Score: N/A');
            }
        ")
        echo "\$score"
    fi
else
    echo "Not run"
fi)

## Quick Accessibility Checklist

- [ ] Skip link implemented
- [ ] Form labels properly associated
- [ ] Images have descriptive alt text
- [ ] Interactive elements have ARIA labels
- [ ] Color contrast meets WCAG standards
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

## Files Generated
- eslint-a11y-report.txt
- axe-*-report.json (for each page tested)
- lighthouse-a11y-report.json
- accessibility-test-results.md (this file)

## Next Steps
1. Review all generated report files
2. Fix issues found in ESLint report
3. Address axe-core violations
4. Improve Lighthouse score to 90+
EOF

    echo "Summary generated in accessibility-test-results.md"
}

# Main execution
main() {
    # Check if server is running
    if ! check_server; then
        echo ""
        echo "Start the development server first:"
        echo "   npm start"
        echo ""
        echo "Then run this script again."
        exit 1
    fi

    # Run all tests
    run_eslint_a11y
    run_axe_tests
    run_lighthouse

    # Generate summary
    generate_summary

    echo ""
    echo "Accessibility testing completed!"
    echo ""
    echo "Check these files for results:"
    echo "   - accessibility-test-results.md (Summary)"
    echo "   - eslint-a11y-report.txt (Code issues)"
    if [ -f lighthouse-a11y-report.json ]; then
        echo "   - lighthouse-a11y-report.json (Performance audit)"
    fi
    echo "   - axe-*-report.json (Page-specific issues)"
    echo ""
    echo "Next: Review the reports and implement the suggested fixes!"
}

# Run the script
main "$@"
