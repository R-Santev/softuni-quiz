import { html } from "../../lit-html/lit-html.js";
import { dataService } from "../services/dataService.js";

function editorTemplate(quiz, ctx) {
  return html`
    <section id="editor">
      <header class="pad-large">
        <h1>New quiz</h1>
      </header>

      <div class="pad-large alt-page">
        <form @submit=${(e) => onSubmit(e, ctx)}>
          <label class="editor-label layout">
            <span class="label-col">Title:</span>
            <input
              class="input i-med"
              type="text"
              name="title"
              .value=${quiz.title ? quiz.title : ""}
          /></label>
          <label class="editor-label layout">
            <span class="label-col">Topic:</span>
            <select class="input i-med" name="topic">
              <option value="all">All Categories</option>
              <option value="it">Languages</option>
              <option value="hardware">Hardware</option>
              <option value="software">Tools and Software</option>
            </select>
          </label>
          <input class="input submit action" type="submit" value="Save" />
        </form>
      </div>

      <header class="pad-large">
        <h2>Questions</h2>
      </header>

      <div class="pad-large alt-page">
        <article class="editor-question">
          <div class="layout">
            <div class="question-control">
              <button class="input submit action">
                <i class="fas fa-check-double"></i> Save
              </button>
              <button class="input submit action">
                <i class="fas fa-times"></i> Cancel
              </button>
            </div>
            <h3>Question 1</h3>
          </div>
          <form>
            <textarea
              class="input editor-input editor-text"
              name="text"
              placeholder="Enter question"
            ></textarea>
            <div class="editor-input">
              <label class="radio">
                <input class="input" type="radio" name="question-1" value="0" />
                <i class="fas fa-check-circle"></i>
              </label>

              <input class="input" type="text" name="answer-0" />
              <button class="input submit action">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div class="editor-input">
              <label class="radio">
                <input class="input" type="radio" name="question-1" value="1" />
                <i class="fas fa-check-circle"></i>
              </label>

              <input class="input" type="text" name="answer-1" />
              <button class="input submit action">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div class="editor-input">
              <label class="radio">
                <input class="input" type="radio" name="question-1" value="2" />
                <i class="fas fa-check-circle"></i>
              </label>

              <input class="input" type="text" name="answer-2" />
              <button class="input submit action">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div class="editor-input">
              <button class="input submit action">
                <i class="fas fa-plus-circle"></i>
                Add answer
              </button>
            </div>
          </form>
        </article>

        <article class="editor-question">
          <div class="layout">
            <div class="question-control">
              <button disabled class="input submit action">
                <i class="fas fa-check-double"></i> Save
              </button>
              <button disabled class="input submit action">
                <i class="fas fa-times"></i> Cancel
              </button>
            </div>
            <h3>Question 1</h3>
          </div>
          <form>
            <textarea
              disabled
              class="input editor-input editor-text"
              name="text"
              placeholder="Enter question"
            ></textarea>
            <div class="editor-input">
              <label class="radio">
                <input
                  disabled
                  class="input"
                  type="radio"
                  name="question-1"
                  value="0"
                />
                <i class="fas fa-check-circle"></i>
              </label>

              <input disabled class="input" type="text" name="answer-0" />
              <button disabled class="input submit action">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div class="editor-input">
              <label class="radio">
                <input
                  disabled
                  class="input"
                  type="radio"
                  name="question-1"
                  value="1"
                />
                <i class="fas fa-check-circle"></i>
              </label>

              <input disabled class="input" type="text" name="answer-1" />
              <button disabled class="input submit action">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div class="editor-input">
              <label class="radio">
                <input
                  disabled
                  class="input"
                  type="radio"
                  name="question-1"
                  value="2"
                />
                <i class="fas fa-check-circle"></i>
              </label>

              <input disabled class="input" type="text" name="answer-2" />
              <button disabled class="input submit action">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
            <div class="editor-input">
              <button disabled class="input submit action">
                <i class="fas fa-plus-circle"></i>
                Add answer
              </button>
            </div>
          </form>
          <div class="loading-overlay working"></div>
        </article>

        <article class="editor-question">
          <div class="layout">
            <div class="question-control">
              <button class="input submit action">
                <i class="fas fa-edit"></i> Edit
              </button>
              <button class="input submit action">
                <i class="fas fa-trash-alt"></i> Delete
              </button>
            </div>
            <h3>Question 2</h3>
          </div>
          <form>
            <p class="editor-input">This is the second question.</p>
            <div class="editor-input">
              <label class="radio">
                <input
                  class="input"
                  type="radio"
                  name="question-2"
                  value="0"
                  disabled
                />
                <i class="fas fa-check-circle"></i>
              </label>
              <span>Answer 0</span>
            </div>
            <div class="editor-input">
              <label class="radio">
                <input
                  class="input"
                  type="radio"
                  name="question-2"
                  value="1"
                  disabled
                />
                <i class="fas fa-check-circle"></i>
              </label>
              <span>Answer 1</span>
            </div>
            <div class="editor-input">
              <label class="radio">
                <input
                  class="input"
                  type="radio"
                  name="question-2"
                  value="2"
                  disabled
                />
                <i class="fas fa-check-circle"></i>
              </label>
              <span>Answer 2</span>
            </div>
          </form>
        </article>

        <article class="editor-question">
          <div class="editor-input">
            <button class="input submit action">
              <i class="fas fa-plus-circle"></i>
              Add question
            </button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function onSubmit(e, ctx) {
  e.preventDefault();

  const formData = new FormData(e.target);
  console.log(e.target);
  const submitBtn = e.target.querySelector("input[type=submit]");
  submitBtn.disabled = true;
  const title = formData.get("title");
  const topic = formData.get("topic");

  dataService
    .createQuiz(title, topic)
    .then((res) => {
      ctx.notify("Quiz created successfully!");
      ctx.page.redirect("/browse");
    })
    .catch((err) => {
      ctx.notify(`Error: ${err.message}`);
    })
    .finally(() => {
      submitBtn.disabled = false;
    });
}

export function editView(ctx) {
  console.log("editView");
  const quiz = {};
  const quizId = ctx.params.id;
  if (quizId != "new") {
    // get quiz and set to quiz object
  }

  ctx.render(editorTemplate(quiz, ctx));
}
