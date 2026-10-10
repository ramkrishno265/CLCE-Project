const prisma = require('../config/prisma');

// 1. Get All Team Members (Public Route)
const getTeamMembers = async (req, res) => {
    try {
        const members = await prisma.teamMember.findMany({
            orderBy: { order: 'asc' } // <--- Position onujae sort hobe
        });
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch team members' });
    }
};

// 2. Get Single Team Member by ID
const getTeamMemberById = async (req, res) => {
    try {
        const { id } = req.params;
        const member = await prisma.teamMember.findUnique({ where: { id } });

        if (!member) {
            return res.status(404).json({ message: 'Team member not found' });
        }
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch team member' });
    }
};

// 3. Create New Team Member (Protected Route)
const createTeamMember = async (req, res) => {
    try {
        const { 
            name, role, email, shortBio, fullBio, education, 
            image, cover, facebook, linkedin, instagram, website, order 
        } = req.body;

        const newMember = await prisma.teamMember.create({
            data: {
                name,
                role,
                email,
                shortBio: shortBio || '',
                fullBio: fullBio || '',
                education: education || '',
                image: image || '/team/member1.jpg',
                cover: cover || '', // কভার ফটো লিংক সেভ করার জন্য
                facebook: facebook || '',
                linkedin: linkedin || '',
                instagram: instagram || '',
                website: website || '',
                order: order ? parseInt(order) : 1,
            }
        });

        res.status(201).json({ message: 'Team member created successfully', member: newMember });
    } catch (error) {
        console.error('Error creating team member:', error);
        res.status(500).json({ error: 'Failed to create team member' });
    }
};

// 4. Update Team Member (Protected Route)
const updateTeamMember = async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            name, role, email, shortBio, fullBio, education, 
            image, cover, facebook, linkedin, instagram, website, order 
        } = req.body;

        const updatedMember = await prisma.teamMember.update({
            where: { id },
            data: {
                name,
                role,
                email,
                shortBio: shortBio || '',
                fullBio: fullBio || '',
                education: education || '',
                image: image || '',
                cover: cover || '',
                facebook: facebook || '',
                linkedin: linkedin || '',
                instagram: instagram || '',
                website: website || '',
                order: order ? parseInt(order) : 1,
            }
        });

        res.status(200).json({ message: 'Team member updated successfully', member: updatedMember });
    } catch (error) {
        console.error('Error updating team member:', error);
        res.status(500).json({ error: 'Failed to update team member' });
    }
};

// 5. Delete Team Member (Protected Route)
const deleteTeamMember = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.teamMember.delete({ where: { id } });

        res.status(200).json({ message: 'Member deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete team member' });
    }
};

module.exports = {
    getTeamMembers,
    getTeamMemberById,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember
};