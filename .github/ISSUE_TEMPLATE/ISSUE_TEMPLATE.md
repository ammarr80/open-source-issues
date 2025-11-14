name: "💡 New Issue"
description: "Use this template to submit a bug, feature request, or enhancement."
title: "[ISSUE] "
labels: "help wanted"
assignees: ""

body:
  - type: markdown
    attributes:
      value: |
        ## 🎯 Goal
        <!-- Describe the purpose of this issue. What problem does it solve? -->

  - type: textarea
    id: description
    attributes:
      label: "Detailed Description"
      description: "Explain the issue, feature request, or enhancement in detail."

  - type: textarea
    id: steps
    attributes:
      label: "Steps to Reproduce (for bugs)"
      description: "List the steps to reproduce this issue. Leave blank if not applicable."

  - type: textarea
    id: expected
    attributes:
      label: "Expected Behavior"
      description: "What is the expected outcome?"

  - type: textarea
    id: actual
    attributes:
      label: "Actual Behavior"
      description: "What actually happens? (for bugs only)"

  - type: dropdown
    id: difficulty
    attributes:
      label: "Difficulty Level"
      description: "Choose the difficulty level for this issue."
      options:
        - Beginner
        - Intermediate
        - Advanced

  - type: textarea
    id: additional_info
    attributes:
      label: "Additional Information"
      description: "Any other relevant info, screenshots, or references."
      
Features of this template:

- Structured for bugs, feature requests, or enhancements.
- Includes steps, expected vs actual behavior for bug reports.
- Includes difficulty level to help contributors pick issues.
- Encourages clear, detailed descriptions.
