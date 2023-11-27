import { api } from "../api.js";

const dataEndpoints = {
  quizzes: "classes/quiz",
};

async function createQuiz(title, topic) {
  return api.post(dataEndpoints.quizzes, {
    title,
    topic,
  });
}

async function getQuizzes(queryString) {
  return api.get(dataEndpoints.quizzes + queryString);
}

async function createQuizMock(title, topic) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Somethign went wrong!");
    }, 3000);
  });
}

export const dataService = {
  createQuiz,
  createQuizMock,
  getQuizzes,
};
