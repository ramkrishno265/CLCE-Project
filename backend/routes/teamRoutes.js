const express = require('express');
const router = express.Router();
const {
    getTeamMembers,
    getTeamMemberById,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember
} = require('../controllers/teamController');

const { protectAdmin } = require('../middlewares/authMiddleware');

// Public Routes (যে কেউ টিম দেখতে পারবে)
router.get('/', getTeamMembers);
router.get('/:id', getTeamMemberById);

// Protected Admin Routes (শুধু অ্যাডমিন অ্যাড/এডিট/ডিলিট করতে পারবে)
router.post('/', protectAdmin, createTeamMember);
router.put('/:id', protectAdmin, updateTeamMember);
router.delete('/:id', protectAdmin, deleteTeamMember);

module.exports = router;