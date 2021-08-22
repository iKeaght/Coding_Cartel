import { sequelize } from '../../../database/models';

export default async function completeProjects(req, res) {
  try {
    const activities = await sequelize.models.Activity.findAll({ include: sequelize.models.Tag });
    return res.status(200).json(activities);
  } catch (err) {
    return res.status(500);
  }
}
