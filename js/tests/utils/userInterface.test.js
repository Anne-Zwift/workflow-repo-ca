import { expect, describe, it } from 'vitest';
import { isActivePath } from '../../utils/userInterface';

describe('isActivePath', () => {
  it('returns true when current path matches href exactly', () => {
    // Arrange: Set up the test data
    const href = '/about';
    const currentPath = '/about';
    // Act: Call the function being tested
    const result = isActivePath(href, currentPath);
    // Assert: Check if the result matches the expected output
    expect(result).toBe(true);
  });

  it("returns true for root path ('/') when href is '/'", () => {
    const href = '/';
    const currentPath = '/';
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("returns true for root path ('/') when href is '/index.html'", () => {
    const href = '/';
    const currentPath = '/index.html';
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it('returns true when current path includes the href', () => {
    const href = '/dashboard';
    const currentPath = '/dashboard/settings';
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });

  it("returns false when paths don't match or partially include each other incorrectly", () => {
    const href = '/settings';
    const currentPath = '/dashboard';
    const result = isActivePath(href, currentPath);
    expect(result).toBe(false);
  });

  it('returns false for partial matches that are not a directory/route boundary', () => {
    const href = '/users';
    const currentPath = '/user-list';
    const result = isActivePath(href, currentPath);
    expect(result).toBe(false);
  });
});
