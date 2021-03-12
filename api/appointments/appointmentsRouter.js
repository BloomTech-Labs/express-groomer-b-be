const express = require('express');
// const authRequired = require('../middleware/authRequired');
const appointment = require('./appointmentsModel');
const router = express.Router();


/* GET ALLL APPOINTMENTS */
router.get('/', async (req, res) => {
    try {
        const data = await appointment.getAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

/* GET APPOINTMENTS BY ID */
router.get('/:id', async (req, res) => {
    try {
        const data = await appointment.getById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

/* POST A NEW APPOINTMENT */
router.post('/', async (req, res) => {
    try {
        const existingAppointment = undefined;
        if (req.body.appointment_id) {
            existingAppointment = await appointment.getById(req.body.appointment_id);
        }
        if (existingAppointment === undefined) {
            //add appointment if non exist on that date
            const new_appointment = await appointment.create(req.body);
            res.status(200).json({
                message: "Appointment has been created", Appointment: new_appointment
            });
        } else {
            res.status(400).json({
                message: "Appointment already exists. Please enter a new date."
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


// UPDATE APPOINTMENT BY ID
router.put('/:id', async (req, res) => {
    try {
        if (req.params.id) {
            const updates = await appointment.update(req.params.id, req.body);
            res.status(200).json({
                message: "Appointment updated!", Appointment: updates
            });
        } else {
            res.status(400).json({
                message: "Appointment does not exist"
            });
        } 
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
})


// DELETE APPOINTMENT
router.delete('/:id', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(404).json({
                message: "Missing ID"
            });
        }
        await appointment.remove(req.params.id);
        res.status(200).json({
            message: "Appointment deleted!"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        })      
    }
})

module.exports = router;