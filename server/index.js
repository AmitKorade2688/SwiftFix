const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 8081;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Store PCC files in the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error: ", error);
  });

// Create schemas
const loginDataSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  address: { type: String, required: false } // New address field
});

const applicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  surname: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  referralCode: { type: String },
  pccFile: { type: String, required: true }, // New PCC file field
  profession: { type: String, required: true } 
});

// Create models based on the schemas
const LoginData = mongoose.model('LoginData', loginDataSchema);
const Application = mongoose.model('Application', applicationSchema);

// Signup route
app.post('/signup', async (req, res) => {
  const { username, password, phoneNumber, address } = req.body;

  try {
    const existingUser = await LoginData.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new LoginData({
      username,
      password: hashedPassword,
      phoneNumber,
      address
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await LoginData.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Handle application submission with PCC file
app.post('/apply', upload.single('pccFile'), async (req, res) => {
  const {
    firstName,
    middleName,
    surname,
    dateOfBirth,
    gender,
    email,
    phoneNumber,
    address,
    referralCode,
    profession
  } = req.body;

  try {
    const newApplication = new Application({
      firstName,
      middleName,
      surname,
      dateOfBirth,
      gender,
      email,
      phoneNumber,
      address,
      referralCode,
      pccFile: req.file.path, // Save PCC file path
      profession
    });

    await newApplication.save();
    
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error submitting application:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get all applications, fetching only firstName and surname
app.get('/applications', async (req, res) => {
  try {
    const applications = await Application.find().select('firstName surname profession'); // Only fetch firstName and surname
    res.status(200).json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
