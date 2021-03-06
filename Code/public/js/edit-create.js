window.addEventListener("load", function () {
  let starButton = document.getElementById("star");
  let highlight = document.getElementById("highlight");

  if (highlight && highlight.value == 1) {
    starButton.classList.toggle("is-active");
  }
  if (starButton) {
    starButton.addEventListener("click", function () {
      starButton.classList.toggle("is-active");
      if (starButton.classList.contains("is-active")) {
        highlight.value = 1;
      } else {
        highlight.value = 0;
      }
    });
  }

  // Validaciones:

  let form = document.getElementById("form");
  let title = document.getElementById("titulo");
  let artist = document.getElementById("artista");
  let label = document.getElementById("sello");
  let genre = document.getElementById("genero");
  let publishingDate = document.getElementById("fechaPublicacion");
  let price = document.getElementById("precio");
  let stock = document.getElementById("stock");
  let format = document.getElementById("formato");
  let inches = document.getElementById("pulgadas");
  let rpm = document.getElementById("rpm");
  let cover = document.getElementById("tapa");
  let description = document.getElementById("descripcion");
  const ALLOWED_IMAGES_EXT = ["jpeg", "jpg", "png", "gif"];

  let handleFeedback = function (element, elementID, feedback) {
    let feedbackElement = document.getElementById(elementID);
    feedbackElement.innerHTML = feedback;
    feedback
      ? element.classList.add("input-error")
      : element.classList.remove("input-error");
  };

  let validateTitle = function () {
    let feedback = "";
    if (validator.isEmpty(title.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese un título";
    } else if (!validator.isLength(title.value, { min: 5 })) {
      feedback = "Por favor el título debe tener más de 5 caracteres";
    }
    handleFeedback(title, "feedback-title", feedback);
    return feedback;
  };

  let validateArtist = function () {
    let feedback = "";
    if (validator.isEmpty(artist.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese un artista";
    }
    handleFeedback(artist, "feedback-artist", feedback);
    return feedback;
  };

  let validateLabel = function () {
    let feedback = "";
    if (validator.isEmpty(label.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese un sello";
    }
    handleFeedback(label, "feedback-label", feedback);
    return feedback;
  };

  let validateGenre = function () {
    let feedback = "";
    if (validator.isEmpty(genre.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese un género";
    }
    handleFeedback(genre, "feedback-genre", feedback);
    return feedback;
  };

  let validatePublishingDate = function () {
    let feedback = "";
    if (validator.isEmpty(publishingDate.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese una fecha de publicación";
    }
    handleFeedback(publishingDate, "feedback-publishing-date", feedback);
    return feedback;
  };

  let validatePrice = function () {
    let feedback = "";
    if (validator.isEmpty(price.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese un precio";
    }
    handleFeedback(price, "feedback-price", feedback);
    return feedback;
  };

  let validateStock = function () {
    let feedback = "";
    if (stock.value < 1) {
      feedback = "Por favor ingrese un stock válido";
    }
    handleFeedback(stock, "feedback-stock", feedback);
    return feedback;
  };

  let validateFormat = function () {
    let feedback = "";
    if (validator.isEmpty(format.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese un formato";
    }
    handleFeedback(format, "feedback-format", feedback);
    return feedback;
  };

  let validateInches = function () {
    let feedback = "";
    if (validator.isEmpty(inches.value, { ignore_whitespace: true })) {
      feedback = "Por favor seleccione las pulgadas";
    }
    handleFeedback(inches, "feedback-inches", feedback);
    return feedback;
  };

  let validateRPM = function () {
    let feedback = "";
    if (validator.isEmpty(rpm.value, { ignore_whitespace: true })) {
      feedback = "Por favor seleccione las revoluciones";
    }
    handleFeedback(rpm, "feedback-rpm", feedback);
    return feedback;
  };

  let validateCover = function () {
    let feedback = "";
    let ext = cover.value.split(".")[1];
    if (cover.value && !ALLOWED_IMAGES_EXT.includes(ext)) {
      feedback = "Tapa de formato inválido";
    }
    if (!cover.value) {
      feedback = "Por Favor ingrese una imagen de la tapa";
    }
    handleFeedback(cover, "feedback-cover", feedback);
    return feedback;
  };

  let validateDescription = function () {
    let feedback = "";
    if (validator.isEmpty(description.value, { ignore_whitespace: true })) {
      feedback = "Por favor ingrese una descripción";
    } else if (!validator.isLength(description.value, { min: 20 })) {
      feedback = "Por favor la descripción debe tener más de 20 caracteres";
    }
    handleFeedback(description, "feedback-description", feedback);
    return feedback;
  };

  if (window.location.href.includes("/products/edit")) {
    validateTitle();
    validateArtist();
    validateLabel();
    validateGenre();
    validatePublishingDate();
    validatePrice();
    validateStock();
    validateFormat();
    validateInches();
    validateRPM();
    validateCover();
    validateDescription();
  }

  title.addEventListener("blur", validateTitle);
  artist.addEventListener("blur", validateArtist);
  label.addEventListener("blur", validateLabel);
  genre.addEventListener("blur", validateGenre);
  publishingDate.addEventListener("blur", validatePublishingDate);
  price.addEventListener("blur", validatePrice);
  stock.addEventListener("blur", validateStock);
  format.addEventListener("blur", validateFormat);
  inches.addEventListener("blur", validateInches);
  rpm.addEventListener("blur", validateRPM);
  cover.addEventListener("blur", validateCover);
  description.addEventListener("blur", validateDescription);

  form.addEventListener("submit", function (submit) {
    if (
      validateTitle() ||
      validateArtist() ||
      validateLabel() ||
      validateGenre() ||
      validatePublishingDate() ||
      validatePrice() ||
      validateStock() ||
      validateFormat() ||
      validateInches() ||
      validateRPM() ||
      validateCover() ||
      validateDescription()
    ) {
      submit.preventDefault();
    }
  });
});
