import { sequelize } from '../../../database/models';
import { slugify } from '../../../database/helper/helper';

export default async function addActivity(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  try {
    const activityAdded = await sequelize.models.Activity.create({ ...req.query, slug: slugify(req.query.name) });
    return res.status(200).json({ activityAdded });
  } catch (err) {
    let message = 'Données invalides.';
    if (err.errors) {
      message = err.errors.map((e) => e.message);
    }
    return res.status(400).json(message);
  }
}
