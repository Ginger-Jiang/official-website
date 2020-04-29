'use strict';

const Controller = require('egg').Controller;

class NunjucksController extends Controller {
  async index() {
    const { ctx } = this;
    const userList = await this.app.mysql.select('dede_admin');
    await ctx.render('index.html', { userList });
  }
}

module.exports = NunjucksController;
