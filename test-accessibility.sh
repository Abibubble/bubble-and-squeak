#!/bin/bash

# Accessibility Testing Script for Bubble & Squeak
# Run this script to perform comprehensive accessibility testing

echo "Starting Accessibility Testing for Bubble & Squeak..."
echo "================================================="

# Check if development server is running
check_server() {
    if curl -s http://localhost:3000 > /dev/null; then
        echo "Development server is running"
        return 0
    else
        echo "Development server not running. Please start with 'npm start'"
        return 1
    fi
}

# Run ESLint with accessibility rules
run_eslint() {
    echo "🔧 Running ESLint accessibility checks..."
    npx eslint src/ --ext .tsx,.ts --format=stylish > eslint-a11y-report.txt 2>&1
    if [ $? -eq 0 ]; then
        echo "ESLint accessibility check completed"
    else
        echo "ESLint found accessibility issues - check eslint-a11y-report.txt"
    fi
}

# Run axe-core tests on multiple pages
run_axe_tests() {
    echo "Running axe-core accessibility tests..."

    # Test home page
    echo "Testing home page..."
    npx axe http://localhost:3000 --reporter json > axe-home-report.json 2>&1

    # Test other pages
    echo "Testing theme parks page..."
    npx axe http://localhost:3000/theme-parks --reporter json > axe-parks-report.json 2>&1

    echo "Testing rides page..."
    npx axe http://localhost:3000/rides --reporter json > axe-rides-report.json 2>&1

    echo "Testing escape rooms page..."
    npx axe http://localhost:3000/escape-rooms --reporter json > axe-rooms-report.json 2>&1

    echo "axe-core tests completed - check axe-*-report.json files"
}

# Check for basic accessibility patterns in code
check_code_patterns() {
    echo "Checking code for accessibility patterns..."

    echo "Checking for alt attributes..."
    grep -r "alt=" src/ || echo "No alt attributes found in src/"

    echo "Checking for aria attributes..."
    grep -r "aria-" src/ | wc -l | xargs -I {} echo "Found {} ARIA attributes"

    echo "Checking for semantic HTML elements..."
    grep -r -E "(header|nav|main|section|article|aside|footer)" src/ | wc -l | xargs -I {} echo "Found {} semantic HTML elements"

    echo "Checking for focus management..."
    grep -r -E "(focus|tabIndex)" src/ | wc -l | xargs -I {} echo "Found {} focus-related implementations"
}

# Generate summary report
generate_summary() {
    echo "Generating accessibility summary..."
    cat > accessibility-summary.md << EOF
# Accessibility Test Summary for Bubble & Squeak

## Test Results

### ESLint Accessibility Check
$(if [ -f eslint-a11y-report.txt ]; then echo "Completed - see eslint-a11y-report.txt"; else echo "Not run"; fi)

### axe-core Tests
$(if [ -f axe-home-report.json ]; then echo "Home page tested"; else echo "Home page not tested"; fi)
$(if [ -f axe-parks-report.json ]; then echo "Parks page tested"; else echo "Parks page not tested"; fi)
$(if [ -f axe-rides-report.json ]; then echo "Rides page tested"; else echo "Rides page not tested"; fi)
$(if [ -f axe-rooms-report.json ]; then echo "Escape rooms page tested"; else echo "Escape rooms page not tested"; fi)

### Code Pattern Analysis
- ARIA attributes: $(grep -r "aria-" src/ 2>/dev/null | wc -l | tr -d ' ')
- Semantic elements: $(grep -r -E "(header|nav|main|section|article|aside|footer)" src/ 2>/dev/null | wc -l | tr -d ' ')
- Alt attributes: $(grep -r "alt=" src/ 2>/dev/null | wc -l | tr -d ' ')
- Focus management: $(grep -r -E "(focus|tabIndex)" src/ 2>/dev/null | wc -l | tr -d ' ')

## Next Steps
1. Review all generated report files
2. Address high-priority issues first
3. Implement missing accessibility features
4. Re-run tests to verify fixes

## Files Generated
- accessibility-audit.md (Comprehensive audit)
- accessibility-summary.md (This summary)
- eslint-a11y-report.txt (ESLint results)
- axe-*-report.json (axe-core results for each page)

Generated on: $(date)
EOF
    echo "Summary generated in accessibility-summary.md"
}

# Main execution
main() {
    # Check if server is running
    if ! check_server; then
        exit 1
    fi

    # Run all tests
    run_eslint
    check_code_patterns

    # Try to run axe tests (may not work if package not properly installed)
    if command -v axe &> /dev/null; then
        run_axe_tests
    else
        echo "axe-core CLI not available - skipping automated tests"
        echo "   Install globally with: npm install -g @axe-core/cli"
    fi

    # Generate summary
    generate_summary

    echo ""
    echo "Accessibility testing completed!"
    echo "Check the following files for results:"
    echo "   - accessibility-audit.md (Comprehensive audit)"
    echo "   - accessibility-summary.md (Summary)"
    echo "   - eslint-a11y-report.txt (ESLint results)"
    if [ -f axe-home-report.json ]; then
        echo "   - axe-*-report.json (axe-core results)"
    fi
}

# Run the script
main
