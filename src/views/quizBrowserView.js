import { html } from "../../lit-html/lit-html.js";
import { dataService } from "../services/dataService.js";
import { utils } from "../utils/index.js";
import { loaderView } from "./loaderView.js";

function quizPreviewTemplate(quiz) {
  return html`
    <article class="preview layout">
      <div class="right-col">
        <a class="action cta" href="#">View Quiz</a>
      </div>
      <div class="left-col">
        <h3>
          <a class="quiz-title-link" href="#">${quiz.title}</a>
        </h3>
        <span class="quiz-topic">Topic: ${quiz.topic}</span>
        <div class="quiz-meta">
          <span>15 questions</span>
          <span>|</span>
          <span>Taken 54 times</span>
        </div>
      </div>
    </article>
  `;
}

function browseTemplate(quizzes, ctx) {
  return html`
    <section id="browse">
      <header class="pad-large">
        <form class="browse-filter" @submit=${(e) => onFilter(e, ctx)}>
          <input class="input" type="text" name="title" />
          <select class="input" name="topic">
            <option value="all">All Categories</option>
            <option value="it">Languages</option>
            <option value="hardware">Hardware</option>
            <option value="software">Tools and Software</option>
          </select>
          <input
            class="input submit action"
            type="submit"
            value="Filter Quizes"
          />
        </form>
        <h1>All quizes</h1>
      </header>

      <div class="pad-large alt-page">
        ${quizzes.map((q) => quizPreviewTemplate(q))}

        <article class="preview layout">
          <div class="right-col">
            <a class="action cta" href="#">View Quiz</a>
          </div>
          <div class="left-col">
            <h3><a class="quiz-title-link" href="#">RISC Architecture</a></h3>
            <span class="quiz-topic">Topic: Hardware</span>
            <div class="quiz-meta">
              <span>10 questions</span>
              <span>|</span>
              <span>Taken 107 times</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function onFilter(e, ctx) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const title = formData.get("title");
  const topic = formData.get("topic");
  console.log(title, topic);
  const query = {
    title: title !== "" ? title : undefined,
    topic: topic !== "all" ? topic : undefined,
  };

  console.log("queryObject ", query);

  const queryString = utils.buildQuery(query);

  console.log("queryString");
  console.log(queryString);

  console.log("queryString fro mbuilder", queryString);

  ctx.goTo("/browse" + (queryString ? `?${queryString}` : ""));

  console.log(title, topic);
}

export function browserView(ctx) {
  const queryString = location.search;
  console.log(queryString);

  ctx.render();
  loaderView.showLoader();
  dataService
    .getQuizzes(queryString)
    .then((data) => {
      console.log(data.results);
      ctx.render(browseTemplate(data.results, ctx));
    })
    .finally(loaderView.hideLoader);
}
