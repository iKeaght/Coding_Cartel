import { slugify } from '../../../database/helper/helper';
import { sequelize } from '../../../database/models';

export default async function addProject(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  try {
    const projectAdded = await sequelize.models.Project.create({ ...req.query, slug: slugify(req.query.name) });
    return res.status(200).json({ activityAdded: projectAdded });
  } catch (err) {
    let message = 'Données invalides.';
    if (err.errors) {
      message = err.errors.map((e) => e.message);
    }
    return res.status(400).json(message);
  }
}
