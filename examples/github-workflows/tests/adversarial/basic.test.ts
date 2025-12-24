import { describe, it, expect } from 'vitest';
import { sanitizeHtml } from '../../src/lib/sanitize';

describe('Adversarial Security Tests', () => {
  describe('XSS Prevention (Cross-Site Scripting)', () => {
    it('should strip basic script tags', () => {
      const input = '<script>alert(1)</script>';
      expect(sanitizeHtml(input)).toBe('');
    });

    it('should strip event handlers', () => {
      const input = '<img src=x onerror=alert(1)>';
      // DOMPurify typically leaves the safe img tag or strips it if not allowed. 
      // Our config allows specific tags. img is NOT in the allowed list in sanitize.ts, so it should be stripped entirely or empty.
      expect(sanitizeHtml(input)).not.toContain('onerror');
    });

    it('should strip javascript: URIs', () => {
      const input = '<a href="javascript:alert(1)">Click me</a>';
      // Expect href to be removed or sanitized
      const output = sanitizeHtml(input);
      expect(output).not.toContain('javascript:');
    });

    it('should allow safe nested tags', () => {
        const input = '<p>Hello <b>World</b></p>';
        expect(sanitizeHtml(input)).toBe('<p>Hello <b>World</b></p>');
    });
  });
});
