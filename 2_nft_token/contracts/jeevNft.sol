// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract JeevNFT is ERC721 {
    constructor() ERC721("JeevNFT", "JEEV") {}
}