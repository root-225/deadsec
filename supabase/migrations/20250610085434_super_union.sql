-- Create database
CREATE DATABASE IF NOT EXISTS deadsec_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE deadsec_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    phone VARCHAR(20),
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Inscriptions table for formations
CREATE TABLE IF NOT EXISTS inscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    formation VARCHAR(255) NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Services table (optional)
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(100),
    features JSON,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert default admin user (password: admin123)
INSERT INTO users (name, email, password, is_admin) VALUES 
('Admin', 'admin@deadsec.com', '$2b$10$rOzJqQqQqQqQqQqQqQqQqO', TRUE)
ON DUPLICATE KEY UPDATE name=name;

-- Insert sample services
INSERT INTO services (title, description, icon, features) VALUES 
('Cloud Solutions', 'Infrastructure cloud évolutable et sécurisée adaptée aux besoins de votre entreprise.', 'cloud', '["Migration Cloud", "Architecture Cloud", "Optimisation des Coûts", "Support Cloud 24/7"]'),
('Cybersécurité', 'Solutions de sécurité complètes pour protéger vos actifs numériques.', 'shield', '["Audit de Sécurité", "Détection des Menaces", "Gestion de la Conformité", "Réponse aux Incidents"]'),
('IA & Machine Learning', 'Solutions d\'IA de pointe pour automatiser les processus et stimuler l\'innovation.', 'robot', '["Analytique Prédictive", "Traitement du Langage Naturel", "Vision par Ordinateur", "Modèles de Deep Learning"]'),
('Transformation Digitale', 'Solutions stratégiques pour moderniser vos opérations commerciales.', 'rocket', '["Automatisation des Processus", "Stratégie Digitale", "Gestion du Changement", "Intégration Technologique"]')
ON DUPLICATE KEY UPDATE title=title;