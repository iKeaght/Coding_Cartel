import { sequelize } from '../../../../database/models';

export default async function activityComplete(req, res) {
  const activity = await sequelize.models.Activity.findOne({ include: sequelize.models.Tag, where: { slug: req.query.slug } });
  return res.status(200).json(activity);
}
