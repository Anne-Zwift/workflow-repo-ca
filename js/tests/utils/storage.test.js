import { expect, describe, it, beforeEach } from 'vitest';
import { saveUser, getUsername } from '../../utils/storage';

/**
 * @file Unit tests for storage functions (saveUser, getUsername).
 * @description
 * This suite tests the utility functions for local storage interaction.
 * The environment is mocked using jsdom,
 * and localStorage is cleared before each test to ensure test isolation.
 * saveUser function:
 * saves the username object to storage
 * getUserName function:
 * 1.	Test returns the name from the user object in storage
 * 2.	Test returns null when no user exists in storage
 */

describe('Storage functions', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('saveUser', () => {
    it('saves the name from the user object in storage', () => {
      //Arrange: Define the object structure
      const testUser = {
        name: 'test-user',
      };

      //Act: Call the function
      saveUser(testUser);

      //Assert: Check raw storage data
      expect(localStorage.getItem('user')).toBe(JSON.stringify(testUser));
    });
  });

  describe('getUsername', () => {
    it('returns the name from the user object in storage', () => {
      localStorage.setItem('user', JSON.stringify({ name: 'test-user' }));

      const retrievedName = getUsername();

      expect(retrievedName).toBe('test-user');
    });

    it("returns null if the user object don't exists in storage", () => {
      const user = getUsername();
      expect(user).toBeNull();
    });
  });
});
