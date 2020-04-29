'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const users = await this.app.mysql.select('dede_user');
    ctx.body = users;
  }
}

module.exports = HomeController;
