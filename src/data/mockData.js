export const projects = [
  {
    id: 1,
    title: 'Maze Solving Robot',
    description: 'Flood Fill Algorithm implementation for Complex Maze Solving using STMicroelectronics’ Time of Flight Sensor Arrays on STEVAL-ROBKIT1',
    fullDescription:
      'Our project is a maze solving robot, that solves an unknown maze in two iterations using flood-fill algorithm, where in the second iteration, it will solve in optimal distance. It’s applications can be wide ranging: using it in warehouses for robots to find optimal path from one rack to another, exploring unknown sites in mines and caves, using it during emergency operations to deliver first-aid kits and ration.',
    members: [
      { 
        name: 'Krish Rohilla', 
        image: '/images/Krish_new.jpeg',
        college: 'Manipal Institute of Technology, Manipal',
        year: '2nd Year'
      },
      { 
        name: 'Dhruv Tiwari', 
        image: '/images/Dhruv Tiwari.jpg',
        college: 'Delhi Technological University',
        year: '2nd Year'
      },
    ],
    category: 'Embedded',
    image: '/images/image.png',
    demoImages: [
      '/images/Maze_1.jpeg',
      '/images/Maze_2.jpeg',
      '/images/Maze_3.jpeg',
      '/images/Maze_4.jpeg'
    ],
    technologies: ['STM32 F401RE', 'ToF Sensors', 'Flood Fill Algorithm', 'C','Python','Pathfinding & Optimization','Embedded Systems Programming','Real-Time Navigation Logic'],
    github: 'https://github.com/example/maze-robot'
  },
  {
    id: 2,
    title: 'Smart Luggage Tracker & Anti-Theft Lock',
    description: 'LockRite : Flutter Android App for B-L475E-IOT01A based Smart Luggage Monitoring',
    fullDescription:
      'During air and rail travel, passengers frequently face issues with lost, misplaced, or stolen luggage. Traditional locks offer no real-time monitoring or control, and there’s no warning when luggage is being separated from the user. This leads to security concerns and inconvenience for travelers. LockRite, a smart luggage monitoring and control system using the STM32 B-L475E-IOT01A development board and a Flutter-based Android app. The system enables:  Secure digital lock/unlock of luggage via smartphone only over BLE.  LED status indication on the board: ON (Locked), OFF (Unlocked).  Lock Status Read via smartphone.  Persistent state retention even after BLE disconnection.  RSSI-based distance monitoring to alert users if they forget about their luggage or someone is taking away their luggage (triggers when signal is below -85 dBm).',
    members: [
      { 
        name: 'Nikita', 
        image: '/images/Nikita-Shakya.jpg',
        college: 'Thapar Institute of Engineering and Technology',
        year: '2nd Year'
      },
    ],
    category: 'Embedded',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
    demoImages: [
      '/images/Flutter_1.png',
      '/images/Flutter_2.png',
      '/images/Flutter_3.png',
      '/images/Flutter_4.png'
    ],
    technologies: ['STM32 B-L475E-IOT1A','Flutter', 'Android App Development', 'Bluetooth Connectivity',],
    github: 'https://github.com/example/luggage-tracker'
  },
  {
    id: 3,
    title: 'Gesture Alertness',
    description: 'ST Edge AI Model Implementation for Gesture Alertness on  B-L475E-IOT01A',
    fullDescription:
      'This project aims to develop an Edge AI Model that can detect and classify a person’s posture — such as slouching, leaning forward, backward, or sideways — in real time. The system uses an accelerometer sensor mounted on the user to capture continuous motion and orientation data, which is then processed by a machine learning model trained in Python to recognize different postures. The model, which has achieved about 95% accuracy, is being ported to run on an STM32 microcontroller, where real-time data from the sensors is used for on-device inference. This posture detection system has potential applications in ergonomic monitoring, wearable health devices, and posture correction solutions for students, office workers, and drivers.',
    members: [
      { 
        name: 'Devaansh Tiwari', 
        image: '/images/Devansh-Tiwari.jpeg',
        college: 'MIT-WPU PUNE',
        year: '4th Year'
      },
      { 
        name: 'Kaamya Mathpal', 
        image: '/images/Kaamya_new.jpeg',
        college: 'Thapar Institute of Engineering & Technology',
        year: '2nd Year'
      },
    ],
    category: 'Embedded',
    image: '/images/slouching.png',
    demoImages: [
      '/images/Slouching_2.png',
      '/images/Slouching_1.png',
    ],
    technologies: ['STM32 B-L475E-IOT01A1', 'LSM6DSL (Accelerometer)', 'Buzzer','Python', 'Machine Learning'],
    github: 'https://github.com/example/gesture-alertness'
  },
  {
    id: 4,
    title: 'Fire-Fighting Robot',
    description: 'Multi Flame Sensors array-based Fire-Fighting Robot  Implementation on STEVAL-ROBKIT1',
    fullDescription:
      'This project develops a Smart Multi-Sensor Fire & Gas Safety System using an STM32H7 microcontroller.  It integrates flame, smoke, and ultrasonic sensors to detect hazards and automatically triggers an audible alarm (buzzer) and a water pump for immediate fire suppression.',
    members: [
      { 
        name: 'Bhavya Aggarwal', 
        image: '/images/Bhavya Aggarwal.jpg',
        college: 'JIIT, NOIDA',
        year: '2nd Year'
      },
      { 
        name: 'Kushagro Mallik', 
        image: '/images/Kushagro Mallik.jpg',
        college: 'VIT,VELLORE',
        year: '3rd Year'
      },
    ],
    category: 'Embedded',
    image: '/images/Fire_1.png',
    demoImages: [
      '/images/Fire_2.png',
      '/images/Fire_3.png',
    ],
    technologies: ['STM32H723ZG Nucleo-144 Development Board', 'IR Flame Detection Sensor Modules (x3)', 'MQ-2 Gas/Smoke Sensor Module', 'HC-SR04 Ultrasonic Sensor Module','Active-Low DC Buzzer Module','Small DC Water Pump'],
    github: 'https://github.com/example/fire-robot'
  },
  {
    id: 5,
    title: 'Digital Stethoscope',
    description: 'Digital stethoscope with signal processing using B-L475E-IOT01A  using MEMS Microphone',
    fullDescription:
      'This project develops a digital stethoscope system using STM32L4 It has the following features :  -Real-time digital signal processing with adjustable bandpass filters (20-150Hz for heart sounds, 300-3400Hz for lung sounds)  -Measures heart rate through peak detection algorithms  -Noise reduction capabilities to improve signal clarity  -Digital output for recording, analysis, and remote sharing of data  -Works on the principle of Converting analog body sounds into processed digital signals  -Connectivity with Bluetooth for Smartphone Apps',
    members: [
      { 
        name: 'Shreyas', 
        image: '/images/Shreyas_Dasgupta.jpg',
        college: 'Birla Institute of Technology,Mesra',
        year: '4th Year'
      },
    ],
    category: 'Embedded',
    image: '/images/doc.png',
    demoImages: [
      '/images/doc_1.png',
      '/images/doc_2.png',
      '/images/doc_3.png'
    ],
    technologies: ['STM32 B-L475E-IOTA101', 'Max 4466 audio sensor', 'Python', 'Machine Learning'],
    github: 'https://github.com/example/digital-stethoscope'
  },
  {
    id: 6,
    title: 'File Classification Project',
    description: 'Application for Detection and Classification of Files',
    fullDescription:
      'This project focuses on preventing the unauthorized transfer of sensitive or classified files. It implements a file classification mechanism to identify files as Company or Personal and further flags any file marked Secret , Restricted and Private. It reads and identifies the keywords in the file and distinguish them on the basis of the sensitivity levels. It also scans for embedded PNG and JPEG images in PDFs, Word, Excel, and PowerPoint files to prevent visual data leaks. This automated system ensures sensitive data is identified early and secured, laying the foundation for access control and secure handling.',
    members: [
      { 
        name: 'Amishar Pal', 
        image: '/images/Amritash.png',
        college: 'Thapar Institute of Engineering technology',
        year: '2nd Year'
      },
    ],
    category: 'IT',
    image: '/images/file.png',
    demoImages: [
      '/images/File_1.png',
      '/images/File_2.png',
      '/images/File_1.png'
    ],
    technologies: ['Python', 'Machine Learning', 'File Parsing & OCR','Desktop Automation','Image Processing', 'Data Classification','System Monitoring','File Handling & Logging'],
    github: 'https://github.com/example/file-classification'
  }
];

export const teamInfo = {
  organizationName: 'Tech Blazers',
  organizationDescription: 'An innovative initiative by STMicroelectronics to foster creativity and technical excellence among young engineers. We focus on embedded systems, IoT solutions, and cutting-edge technology projects.',
  mission: 'To inspire the next generation of engineers through hands-on projects and real-world applications.',
  vision: 'Creating tomorrow\'s technology leaders today.',
  values: ['Innovation', 'Collaboration', 'Excellence', 'Learning']
};



