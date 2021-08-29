import { sequelize } from '../../../../database/models';

export default async function projectID(req, res) {
  if (req.method === 'GET') {
    const project = await sequelize.models.Project.findOne({ where: { slug: req.query.slug } });
    return res.status(200).json({ project });
  }
  if (req.method === 'DELETE') {
    await sequelize.models.Project.destroy({ where: { slug: req.query.slug } });
    return res.status(200).end();
  }
  return res.status(405).end();
}
