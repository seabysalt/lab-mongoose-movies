const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
  .then(celebrities => {
    console.log(celebrities);
    res.render("celebrities", { celebrities })
  })
  .catch(err => {
    console.log(err);
    next()
  })
});

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
  .then((celebrityDetails) => {
    console.log(celebrityDetails);
    res.render("celebrities/show", {celebrityDetails})
  })
  .catch(err => {
    console.log(err);
    next()
  })
})

router.get("/celebrities/new", (req,res) =>
  res.render("celebrities/new")
)

router.get("/celebrities/:id/edit", (req ,res, next) =>
  Celebrity.findById(req.params.id)
  .then((celebrityDetails) => {
    console.log(celebrityDetails);
    res.render("celebrities/edit", {celebrityDetails})
  })
  .catch(err => {
    console.log(err);
    next()
  })
)

router.post("/celebrities", (req, res) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("Error while adding a celebrity", err);
      res.render("celebrities/new");
    });
});

router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.body.id)
    .then(() => {
      console.log("You have successfully removed the celebrity!");
      res.redirect("/celebrities");
    })
    .catch(err => {
      console.log("Error while removing celebrity", err);
      next()
    });
})

router.post("/celebrities/:id", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.update(id, req.body)
  .then(() => {
    console.log("You have successfully updated the celebrity!");
    res.redirect("/celebrities");
  })
  .catch(err => {
    console.log("Error while updating celebrity", err);
    next()
  });
})

module.exports = router;