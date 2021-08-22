import { sequelize } from '../../../database/models';

export default async function completeProjects(req, res) {
  try {
    const projects = await sequelize.models.Project.findAll({ include: sequelize.models.Technology });
    return res.status(200).json(projects);
  } catch (err) {
    return res.status(500);
  }
}
