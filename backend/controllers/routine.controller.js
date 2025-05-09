const Routine = require('../models/routine.model');
const Profile = require('../models/profile.model');

const generateRoutine = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.id });
    if (!profile) return res.status(404).json({ message: 'Perfil no encontrado' });

    const intereses = profile.interests?.split(',').map(i => i.trim()) || ['Estudio'];
    const disponibilidad = profile.disponibilidad || {};
    const objetivoHoras = parseInt(profile.goals?.match(/\d+/)?.[0]) || 5;

    const actividades = [];
    let horasAsignadas = 0;

    for (const [dia, franjas] of Object.entries(disponibilidad)) {
      for (const franja of franjas) {
        if (horasAsignadas >= objetivoHoras) break;
        actividades.push({
          title: `Estudiar ${intereses[horasAsignadas % intereses.length]}`,
          day: dia,
          time: franja
        });
        horasAsignadas++;
      }
    }

    const rutina = await Routine.create({
      name: 'Rutina generada automáticamente',
      user: req.user.id,
      activities
    });

    res.status(201).json(rutina);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al generar la rutina' });
  }
};

module.exports = { generateRoutine };
