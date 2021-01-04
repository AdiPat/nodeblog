const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const fs = require("fs");
const moment = require("moment");

const MAX_USERS = 5;
const DEFAULT_USER = 1;
const MAX_POSTS = 10;
const MAX_COMMENTS = 20;
const MAX_COMMENT_SENTENCES = 5;

const domains = ["com", "biz", "uk", "in"];

const loremIpsumParams = {
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
};

const lorem = new LoremIpsum(loremIpsumParams);

const capitalizeString = (str) => {
  let capString = "";
  if (typeof str == "string") {
    capString = str.charAt(0).toUpperCase() + str.slice(1);
  }
  return capString;
};

const getRandomIntInRange = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const generateRandomDate = (
  startDate = moment(["2019"]).startOf("year"),
  endDate = moment()
) => {
  const _startDate = moment(startDate);
  const _endDate = moment(endDate);

  if (!(_startDate.isValid() && _endDate.isValid())) {
    throw new TypeError("Invalid date. ");
  }

  const diffDays = _startDate.diff(_endDate, "days");
  const offset = getRandomIntInRange(1, diffDays);

  const randomDate = _startDate.clone().add(offset, "days");
  return moment.utc(randomDate.clone()).format();
};

const generatePost = (id) => {
  const title = lorem.generateSentences(1);
  const timestamp = generateRandomDate();
  const paragraphCount = 1 + Math.floor(Math.random() * 10);
  const body = lorem.generateParagraphs(paragraphCount);
  return {
    id,
    timestamp,
    title,
    body,
  };
};

const generateComment = (id) => {
  const randomIndex = getRandomIntInRange(0, domains.length);
  const domain = domains[randomIndex];
  const firstName = capitalizeString(lorem.generateWords(1));
  const lastName = capitalizeString(lorem.generateWords(1));
  const domainName = lorem.generateWords(1);
  const body = lorem.generateSentences(
    getRandomIntInRange(1, MAX_COMMENT_SENTENCES)
  );
  const timestamp = generateRandomDate();
  const name = `${firstName} ${lastName}`;
  const email = `${firstName}.${lastName}@${domainName}.${domain}`.toLowerCase();
  return {
    id,
    timestamp,
    name,
    email,
    body,
  };
};

const generateUserData = () => {
  const allUsers = {};

  let curPostId = 1;

  for (let i = 1; i <= MAX_USERS; i++) {
    const userId = i;
    let numPosts = getRandomIntInRange(1, MAX_POSTS);
    if (userId == DEFAULT_USER) {
      numPosts = MAX_POSTS;
    }

    let posts = [];
    for (let j = 1; j <= numPosts; j++) {
      let curPost = generatePost(curPostId);
      curPost.comments = [];
      const numComments = getRandomIntInRange(1, MAX_COMMENTS);
      for (let k = 1; k <= numComments; k++) {
        const comment = generateComment(k);
        curPost.comments.push(comment);
      }
      posts.push(curPost);
      curPostId += 1;
    }
    const postCount = posts.length;
    allUsers[userId] = {
      userId,
      postCount,
      posts,
    };
  }
  return allUsers;
};

const userData = generateUserData();
const json = JSON.stringify(userData);

try {
  fs.writeFileSync("dummy_user_posts.json", json);
} catch (err) {
  console.error("Failed to write file. ", err);
}
