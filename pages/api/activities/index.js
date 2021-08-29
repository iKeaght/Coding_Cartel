import { sequelize } from '../../../database/models';

export default async function projects(req, res) {
  try {
    const allActivities = await sequelize.models.Activity.findAll();
    res.status(200).json(allActivities);
  } catch (err) {
    res.status(500).end();
  }
}
