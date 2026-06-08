import { describe, test, expect } from "vitest";
import { isEmailValid } from '/src/js/auth.js'


describe("isEmailValid", () => {
  test("returns true for a valid email", () => {
    expect(isEmailValid("admindash@example.com")).toBe(true)
  })
  test("returns false for an email without @", () => {
    expect(isEmailValid("admindashexample.com")).toBe(false)
  })

})