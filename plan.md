# Akira Tool Optimization Plan

## Potential Tool Combinations

### 1. System Prompt Management
- Combine `get_system_prompt` and `edit_system_prompt` into a unified `manage_system_prompt` tool
- The combined tool would retrieve the current prompt and optionally update it
- This would simplify the workflow when modifying the system prompt

### 2. Sub-LLM Creation
- Merge `spawn_sub_llm` and `start_sub_llm_conversation` into a single `create_sub_llm` tool
- Add a parameter to specify whether it's for a one-time task or a conversation
- This would provide a more consistent interface for sub-LLM creation

## Less Essential Tools

1. `reload_tools` - Only needed during development of new tools
2. `set_theme` - Primarily aesthetic and not essential to core functionality
3. `screenshot` - Only needed in specific visualization scenarios

## Implementation Priorities

1. Focus on combining the system prompt management tools first
2. Next, address the sub-LLM creation tools
3. Consider whether less essential tools should be moved to an "advanced" category

## Benefits

- Reduced cognitive load for users
- More streamlined tool interface
- Easier onboarding for new users

## Action Checklist

- [ ] Design the API for the new `manage_system_prompt` tool
- [ ] Implement the `manage_system_prompt` tool
- [ ] Write documentation for the new tool
- [ ] Test the new tool with various use cases
- [ ] Design the API for the new `create_sub_llm` tool
- [ ] Implement the `create_sub_llm` tool
- [ ] Write documentation for the new tool
- [ ] Test the new tool with various use cases
- [ ] Create an "advanced tools" category in the documentation
- [ ] Move less essential tools to the advanced category
- [ ] Update the help documentation to reflect these changes
- [ ] Collect user feedback on the streamlined tool interface
- [ ] Make adjustments based on user feedback