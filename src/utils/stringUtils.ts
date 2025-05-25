/**
 * Converts a camelCase or PascalCase string to snake_case
 * @param str The string to convert
 * @returns The snake_case string
 */
export function toSnakeCase(str: string): string {
  return str
    // Insert underscore before capital letters and convert to lowercase
    .replace(/([A-Z])/g, '_$1')
    // Handle the first character (if it's uppercase)
    .replace(/^_/, '')
    .toLowerCase()
}

/**
 * Checks if a string is a date math expression
 * @param str The string to check
 * @returns True if the string is a date math expression
 */
export function isDateMathExpression(str: string): boolean {
  // Check for 'now' with optional math expressions
  if (/^now(?:[+-]\d+[smhdwMy])?(?:\/[dwMy])?$/.test(str)) {
    return true
  }
  
  // Check for ISO date format with optional math expressions
  if (/^\d{4}-\d{2}-\d{2}(?:[+-]\d+[smhdwMy])?(?:\/[dwMy])?$/.test(str)) {
    return true
  }
  
  return false
}