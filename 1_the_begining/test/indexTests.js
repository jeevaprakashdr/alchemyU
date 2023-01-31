"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const node_test_1 = require("node:test");
(0, node_test_1.describe)("Tests", () => {
    it("should pass", () => {
        (0, chai_1.expect)(true).to.equal(false);
    });
});
