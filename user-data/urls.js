const githubUsername = "AmAAnsAjid";
const mediumUsername = "amaansajid98";

const createMediumURL = (username) => `https://leetcode.com/u/${username}`;
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;

export const URLs = {
    medium: createMediumURL(mediumUsername),
    gitConnected: createGitConnectedURL(githubUsername)
};
