import { sequelize } from '../../../../database/models';

export default async function activityID(req, res) {
  if (req.method === 'GET') {
    const activity = await sequelize.models.Activity.findOne({ where: { slug: req.query.slug } });
    return res.status(200).json(activity);
  }
  if (req.method === 'DELETE') {
    await sequelize.models.Activity.destroy({ where: { slug: req.query.slug } });
    return res.status(200).end();
  }
  return res.status(405).end();
}
