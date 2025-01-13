import express from 'express'
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/job.controller.js';

const router = express.Router();
router.route("/job").post(isAuthenticated, postJob);
router.route("/job").get(isAuthenticated, getAllJobs);
router.route("/getAdminJob").get(isAuthenticated, getAdminJobs);
router.route("/job/:id").get(isAuthenticated, getJobById);

export default router;
