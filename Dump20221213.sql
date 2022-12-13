-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: techcare
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `medicine`
--

DROP TABLE IF EXISTS `medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine` (
  `idmedicine` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `stock` int DEFAULT NULL,
  `side_effects` longtext,
  `description` longtext,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idmedicine`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine`
--

LOCK TABLES `medicine` WRITE;
/*!40000 ALTER TABLE `medicine` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `idpatient` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `birthday` timestamp NULL DEFAULT NULL,
  `diagnostic` varchar(45) NOT NULL,
  PRIMARY KEY (`idpatient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_medicine`
--

DROP TABLE IF EXISTS `patient_medicine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient_medicine` (
  `idpatient_medicine` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idpatient_medicine`),
  CONSTRAINT `id_medicine` FOREIGN KEY (`idpatient_medicine`) REFERENCES `medicine` (`idmedicine`),
  CONSTRAINT `id_patient` FOREIGN KEY (`idpatient_medicine`) REFERENCES `patient` (`idpatient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_medicine`
--

LOCK TABLES `patient_medicine` WRITE;
/*!40000 ALTER TABLE `patient_medicine` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_medicine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `iduser` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `password` varchar(500) NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'ana@yahoo.com','111','ana','maria'),(2,'ana34@yahoo.com','123','ana','maria'),(3,'alexandra.g43@yahoo.com','kl','Alexandra','Postelnicescu'),(4,'alexandra.g44553@yahoo.com','kl','Alexandra','Postelnicescu'),(5,'alexandra.gkm43@yahoo.com','jkkij','Alexandra','Postelnicescu'),(6,'alexandra.g43455@yahoo.com','$2b$10$957SfAE1Un5c.GCWvoAL8eIS7h/DvBmaUZ2kBp/X6aJaUGAO8qkMe','Alexandra','Postelnicescu'),(7,'ion@yahoo.com','$2b$10$1lhaEoie.55yMOqfbg6InODmVtQJI7.MbJ0qneBl6If2dOVKRraU2','ion','ion'),(8,'alexandra.g43@yahoo','$2b$10$T9tGadt1vET11OHnpsh4Vu2uPj1jV5726RBa6j/hhUJEJIulDMkpC','Alexandra','Postelnicescu'),(9,'alexandra.g43erfd@yahoo.com','$2b$10$BzOMPpEEISUtaeIGNadY/enIcXRzOBlFj9Gojq3DqjN74Z.Qlj1/W','Alexandra','Postelnicescu'),(10,'alexdra.g43erfd@yahoo.com','$2b$10$mxbqSmCiZ9sZIUDY6N638uTWsmofX79jIvDFGLE7NlDK15ED6NnAG','Alexandra','Postelnicescu'),(11,'alexdrerrfffa.g43erfd@yahoo.com','$2b$10$5gMaTjonHlsKIpT8L/z4j./9c1YMK67GcHqinYzhiGO7xGczXhmYK','Alexandra','Postelnicescu'),(12,'ana3@yahoo.com','$2b$10$PhqkakcHTcekA3mRv0hXRO1/AHVGOoMjjDtTFxl8oHxAgmpefGxMi','ana','ana');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-13 19:42:33
