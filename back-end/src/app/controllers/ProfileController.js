import connectDatabase from '../../database/index';

class ProfileController {
  async index(req, res) {
    const ong_id = await req.headers.authorization;

    const incidents = await connectDatabase('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  }
}

export default new ProfileController();
