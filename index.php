<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Note App</title>

    <!-- bootstrap css file -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
    <!-- bootstrap css file -->

    <!-- bootstrap icon file -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
    />
    <!-- bootstrap icon file -->
  </head>
  <body>
    <!-- container contains app -->
    <div class="container p-4">
      <div class="row align-items-start justify-content-evenly">
        <!-- section contain note part for user interaction -->
        <div class="col-md-5 my-md-0 mt-3 mb-5">
          <hr />
          <h6 class="text-center">Note App</h6>
          <hr />
          <!-- a form that include user note information -->
          <form action="">
            <!-- title input -->
            <input
              type="text"
              name=""
              id="title"
              class="w-100 form-control"
              placeholder="type your title here"
            />
            <!-- title input -->

            <!-- note input -->
            <textarea
              id="note"
              cols="30"
              rows="10"
              placeholder="type your note"
              class="w-100 form-control my-3"
            ></textarea>
            <!-- note input -->

            <!-- form submit button -->
            <button
              class="btn btn-md btn-primary w-100"
              id="submit-btn"
              type="submit"
            >
              add note
            </button>
            <!-- form submit button -->
          </form>
          <!-- a form that include user note information -->
        </div>
        <!-- section contain note part for user interaction -->

        <!-- section contain note -->
        <div class="col-md-5" style="height: 400px; overflow-y: scroll">
          <hr />
          <h6 class="text-center">Notes</h6>
          <hr />
          <!-- table of notes -->
          <table class="table table-responsive table-striped mt-5" id="table">
            <tbody></tbody>
          </table>
          <!-- table of notes -->
        </div>
        <!-- section contain note -->
      </div>
    </div>
    <!-- container contains app -->

    <!-- modal for showing the note -->
    <div class="modal fade" id="modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h6>Your note :</h6>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <textarea
                id="modal-note"
                cols="30"
                rows="10"
                class="form-control"
              >
              </textarea>
              <button
                type="submit"
                class="btn btn-primary w-100 my-3"
                id="modal-submit"
              >
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-outline-danger w-100"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- modal for showing the note -->

    <!-- bootstrap js file -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
      crossorigin="anonymous"
    ></script>
    <!-- bootstrap js file -->

    <script src="./scripts/script.js" type="module"></script>
  </body>
</html>
