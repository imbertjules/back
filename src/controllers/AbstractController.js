class AbstractController {

    throwError(error, res) {
        res.status(400).json({ error });
    }

}

module.exports.AbstractController = AbstractController;