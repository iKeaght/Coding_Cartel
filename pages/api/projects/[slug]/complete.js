import { sequelize } from '../../../../database/models';

export default async function completeProject(req, res) {
  const project = await sequelize.models.Project.findOne({ include: sequelize.models.Technology, where: { slug: req.query.slug } });
  res.status(200).json(project);
}
