import { sequelize } from '../../../database/models';

export default async function projects(req, res) {
  try {
    const allProjects = await sequelize.models.Project.findAll();
    res.status(200).json(allProjects);
  } catch (err) {
    res.status(500);
  }
}
