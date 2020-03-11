import * as Yup from 'yup';
import User from '../models/User';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .integer()
        .required(),
      height: Yup.number()
        .integer()
        .required(),
      weight: Yup.number()
        .integer()
        .required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const userExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (userExists)
      return res.status(400).json({ error: 'User alredy exists' });

    const { id, name, email, age, height, weight } = await Student.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      height,
      weight,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number().integer(),
      height: Yup.number().integer(),
      weight: Yup.number().integer(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const user = await User.findByPk(req.userId);

    if (!user.admin) return res.status(401).json({ error: 'Only admin users' });

    const student = await Student.findByPk(req.params.id);

    const { id, name, email, age, height, weight } = await student.update(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      age,
      height,
      weight,
    });
  }
}

export default new StudentController();
