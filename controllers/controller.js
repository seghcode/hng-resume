exports.homePage = (req, res) => {
    res.render("index")
}

exports.contactForm = (req, res) => {
    const Mess = []
    const newMess = {
        // id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }

    if (!newMess.name || !newMess.email || !newMess.message) {
        return res.render('index', {
            err: 'Please Fill Out the form '
        })
    }

    Mess.push(newMess);
    res.render('index', {
        data: 'Your message has been received',
        details: 'Here are you Details.',
        name: `Name: ${newMess.name}`,
        email: `Email: ${newMess.email}`,
        message: `Message: ${newMess.message}`
    })
}