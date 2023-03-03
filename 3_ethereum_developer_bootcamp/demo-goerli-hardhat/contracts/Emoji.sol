// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.18;

interface Winner {
    function attempt() external;
}

contract Emoji {

    address eventContractAddress = 0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502;
    string current;

    constructor() {
        current = "smile";
    }

    function getCurrentEmoji() external view returns(string memory) {
        return current;
    }

    function setEmoji(string memory value) external {
        current = value;
        Winner(eventContractAddress).attempt();
    }
}