CREATE DATABASE  IF NOT EXISTS `project_2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project_2`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: project_2
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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `CustID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Phone` varchar(14) NOT NULL,
  PRIMARY KEY (`CustID`),
  UNIQUE KEY `CustID_UNIQUE` (`CustID`),
  UNIQUE KEY `Phone_UNIQUE` (`Phone`)
) ENGINE=InnoDB AUTO_INCREMENT=500 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (201,'A. Parks','(214) 555-0127'),(202,'S. Patel','(849) 811-6298'),(203,'A. Hernandez','(355) 572-5385'),(204,'G. Carver','(753) 763-8656'),(205,'Sh. Byers','(912) 925-5332'),(206,'L. Lutz','(931) 966-1775'),(207,'L. Bernal','(884) 727-0591'),(208,'I. Whyte','(811) 979-7345'),(209,'L. Lott','(954) 706-2219'),(210,'G. Clarkson','(309) 625-1838'),(211,'Sh. Dunlap','(604) 581-6642'),(212,'H. Gallegos','(961) 265-8638'),(213,'L. Perkins','(317) 996-3104'),(214,'M. Beach','(481) 422-0282'),(215,'C. Pearce','(599) 881-5189'),(216,'A. Hess','(516) 570-6411'),(217,'M. Lee','(369) 898-6162'),(218,'R. Booker','(730) 784-6303'),(219,'A. Crowther','(325) 783-4082'),(220,'H. Mahoney','(212) 262-8830'),(221,'J. Brown','(644) 756-0110'),(222,'H. Stokes','(931) 969-7317'),(223,'J. Reeves','(940) 981-5113'),(224,'A. Mcghee','(838) 610-5802'),(225,'L. Mullen','(798) 331-7777'),(226,'R. Armstrong','(325) 783-4081'),(227,'J. Greenaway','(212) 262-8829'),(228,'K. Kaiser Acosta','(228) 576-1557'),(229,'D. Kirkpatrick','(773) 696-8009'),(230,'A. Odonnell','(439) 536-8929'),(231,'K. Kay','(368) 336-5403'),(471,'','() -'),(472,'Utkarsh  Singh','(682) 300-7098'),(477,'Aditya Chaudhari','(469) 345-9279'),(494,'Ibra','(614) 779-4531'),(496,'Random','(803) 403-7070'),(498,'banku','(609) 721-7968');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `VehicleID` varchar(20) NOT NULL,
  `imagescol` varchar(2083) NOT NULL,
  KEY `VehicleID_idx` (`VehicleID`),
  CONSTRAINT `VehicleIDS` FOREIGN KEY (`VehicleID`) REFERENCES `vehicle` (`VehicleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES ('19VDE1F3XEE414842','https://cars.usnews.com/pics/size/776x517/images/Auto/izmo/i4538/2014_acura_ilx_angularfront.jpg'),('1FDEE3FL6EDA29122','https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC40FOV173A021001.jpg'),('1FDRF3B61FEA87469','https://www.newcartestdrive.com/wp-content/uploads/2015/01/15-superduty-hero-600x400.jpg'),('1FTNF1CF2EKE54305','https://media.ford.com/content/fordmedia/fna/us/en/products/trucks/f-150/2015-f-150/jcr:content/content/media_section_1/media-section-parsys/textimage_d87c/image.img.951.535.jpg/1505828886454.jpg'),('1GB3KZCG1EF117132','https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i4435/2014_chevrolet_silverado_1500_angularfront.jpg'),('1HGCR2E3XEA305302','https://di-uploads-pod3.s3.amazonaws.com/silkohonda/uploads/2013/10/2014-honda-accord-800x400px.jpg'),('1N4AB7AP2EN855026','http://www.motortrend.com/uploads/sites/10/2015/11/2014-nissan-sentra-sr-cvt-sedan-angular-front.png?fit=around%7C29:16'),('1N6BA0EJ9EN516565','https://cars.usnews.com/static/images/Auto/izmo/i4651/2014_nissan_titan_angularfront.jpg'),('1N6BF0KM0EN101134','https://platform.cstatic-images.com/large/in/v2/stock_photos/ae37f028-43d4-4d3d-a72a-dcc17e282ee1/e529d255-9663-471c-8924-52f757d83618.png'),('1VWCH7A3XEC037969','https://images.hgmsites.net/hug/2014-volkswagen-passat_100451778_h.jpg'),('2HGFB2F94FH501940','https://www.iihs.org/api/ratings/model-year-images/1624/636/'),('2T3DFREV0FW317743','https://www.iihs.org/api/ratings/model-year-images/1863/636/'),('3MZBM1L74EM109736','https://platform.cstatic-images.com/large/in/v2/stock_photos/f48aff44-126b-453c-8fda-00c69a198cbd/332eebfb-3d44-43bc-8648-5684eaaf9df6.png'),('3N1CE2CP0FL409472','https://platform.cstatic-images.com/large/in/v2/stock_photos/e3f56cdd-0846-4440-9de8-650ae71b42d7/d54b4d67-0313-465f-844b-aff2fba9f1a1.png'),('3N1CN7APXEK444458','https://cars.usnews.com/static/images/Auto/izmo/i4475/2014_nissan_versa_sedan_angularfront.jpg'),('3VW2A7AU1FM012211','https://cars.usnews.com/static/images/Auto/izmo/i4973/2015_volkswagen_golf_angularfront.jpg'),('4S4BRCFC1E3203823','https://www.iihs.org/api/ratings/model-year-images/2252/636/'),('4S4BSBF39F3261064','https://www.iihs.org/api/ratings/model-year-images/2251/636/'),('4S4BSELC0F3325370','https://www.iihs.org/api/ratings/model-year-images/2251/636/'),('5J6RM4H90FL028629','https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i5198/2015_honda_cr_v_angularfront.jpg'),('5N1AL0MM8EL549388','https://www.classiccarstodayonline.com/wp-content/uploads/2013/03/2014-Infiniti-JX35.jpg'),('5TDBKRFH4ES26D590','https://media.ed.edmunds-media.com/toyota/highlander/2014/oem/2014_toyota_highlander_4dr-suv_limited_fq_oem_1_815.jpg'),('5XYKT4A75FG610224','https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/8c841600-b3a1-4b77-9573-52f544a3efb6/47bd7f51-c09a-479d-b402-ecf6336860d4.png'),('5XYKU4A7XFG622415','https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/8c841600-b3a1-4b77-9573-52f544a3efb6/47bd7f51-c09a-479d-b402-ecf6336860d4.png'),('5XYKUDA77EG449709','https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i4387/2014_kia_sorento_angularfront.jpg'),('JH4KC1F50EC800004','https://crdms.images.consumerreports.org/c_lfill,w_1110,q_auto,f_auto/prod/cars/cr/model-years/6642-2014-acura-rlx'),('JH4KC1F56EC000095','https://crdms.images.consumerreports.org/c_lfill,w_1110,q_auto,f_auto/prod/cars/cr/model-years/6642-2014-acura-rlx'),('JM3KE4DY4F0441471','https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i4840/2015_mazda_cx_5_angularfront.jpg'),('JN8AS5MV0FW760408','https://media.ed.edmunds-media.com/nissan/rogue-select/2014/oem/2014_nissan_rogue-select_4dr-suv_s_fq_oem_1_815.jpg'),('19VDE1F3XEE414842','https://cars.usnews.com/pics/size/776x517/images/Auto/izmo/i4538/2014_acura_ilx_angularfront.jpg'),('1FDEE3FL6EDA29122','https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC40FOV173A021001.jpg'),('1FDRF3B61FEA87469','https://www.newcartestdrive.com/wp-content/uploads/2015/01/15-superduty-hero-600x400.jpg'),('1FTNF1CF2EKE54305','https://media.ford.com/content/fordmedia/fna/us/en/products/trucks/f-150/2015-f-150/jcr:content/content/media_section_1/media-section-parsys/textimage_d87c/image.img.951.535.jpg/1505828886454.jpg'),('1GB3KZCG1EF117132','https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i4435/2014_chevrolet_silverado_1500_angularfront.jpg'),('1HGCR2E3XEA305302','https://di-uploads-pod3.s3.amazonaws.com/silkohonda/uploads/2013/10/2014-honda-accord-800x400px.jpg'),('1N4AB7AP2EN855026','http://www.motortrend.com/uploads/sites/10/2015/11/2014-nissan-sentra-sr-cvt-sedan-angular-front.png?fit=around%7C29:16'),('1N6BA0EJ9EN516565','https://cars.usnews.com/static/images/Auto/izmo/i4651/2014_nissan_titan_angularfront.jpg'),('1N6BF0KM0EN101134','https://platform.cstatic-images.com/large/in/v2/stock_photos/ae37f028-43d4-4d3d-a72a-dcc17e282ee1/e529d255-9663-471c-8924-52f757d83618.png'),('1VWCH7A3XEC037969','https://images.hgmsites.net/hug/2014-volkswagen-passat_100451778_h.jpg'),('2HGFB2F94FH501940','https://www.iihs.org/api/ratings/model-year-images/1624/636/'),('2T3DFREV0FW317743','https://www.iihs.org/api/ratings/model-year-images/1863/636/'),('3MZBM1L74EM109736','https://platform.cstatic-images.com/large/in/v2/stock_photos/f48aff44-126b-453c-8fda-00c69a198cbd/332eebfb-3d44-43bc-8648-5684eaaf9df6.png'),('3N1CE2CP0FL409472','https://platform.cstatic-images.com/large/in/v2/stock_photos/e3f56cdd-0846-4440-9de8-650ae71b42d7/d54b4d67-0313-465f-844b-aff2fba9f1a1.png'),('3N1CN7APXEK444458','https://cars.usnews.com/static/images/Auto/izmo/i4475/2014_nissan_versa_sedan_angularfront.jpg'),('3VW2A7AU1FM012211','https://cars.usnews.com/static/images/Auto/izmo/i4973/2015_volkswagen_golf_angularfront.jpg'),('4S4BRCFC1E3203823','https://www.iihs.org/api/ratings/model-year-images/2252/636/'),('4S4BSBF39F3261064','https://www.iihs.org/api/ratings/model-year-images/2251/636/'),('4S4BSELC0F3325370','https://www.iihs.org/api/ratings/model-year-images/2251/636/'),('5J6RM4H90FL028629','https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i5198/2015_honda_cr_v_angularfront.jpg'),('5N1AL0MM8EL549388','https://www.classiccarstodayonline.com/wp-content/uploads/2013/03/2014-Infiniti-JX35.jpg'),('5TDBKRFH4ES26D590','https://media.ed.edmunds-media.com/toyota/highlander/2014/oem/2014_toyota_highlander_4dr-suv_limited_fq_oem_1_815.jpg'),('5XYKT4A75FG610224','https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/8c841600-b3a1-4b77-9573-52f544a3efb6/47bd7f51-c09a-479d-b402-ecf6336860d4.png'),('5XYKU4A7XFG622415','https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/8c841600-b3a1-4b77-9573-52f544a3efb6/47bd7f51-c09a-479d-b402-ecf6336860d4.png'),('5XYKUDA77EG449709','https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i4387/2014_kia_sorento_angularfront.jpg'),('JH4KC1F50EC800004','https://crdms.images.consumerreports.org/c_lfill,w_1110,q_auto,f_auto/prod/cars/cr/model-years/6642-2014-acura-rlx'),('JH4KC1F56EC000095','https://crdms.images.consumerreports.org/c_lfill,w_1110,q_auto,f_auto/prod/cars/cr/model-years/6642-2014-acura-rlx'),('JM3KE4DY4F0441471','https://cars.usnews.com/pics/size/350x262/images/Auto/izmo/i4840/2015_mazda_cx_5_angularfront.jpg'),('JN8AS5MV0FW760408','https://media.ed.edmunds-media.com/nissan/rogue-select/2014/oem/2014_nissan_rogue-select_4dr-suv_s_fq_oem_1_815.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rate`
--

DROP TABLE IF EXISTS `rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rate` (
  `Type` int NOT NULL,
  `Category` int NOT NULL,
  `Weekly` int NOT NULL,
  `Daily` int NOT NULL,
  KEY `Type_idx` (`Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rate`
--

LOCK TABLES `rate` WRITE;
/*!40000 ALTER TABLE `rate` DISABLE KEYS */;
INSERT INTO `rate` VALUES (1,0,480,80),(1,1,600,1542),(2,0,530,90),(2,1,660,1700),(3,0,600,100),(3,1,710,1832),(4,0,685,115),(4,1,800,2085),(5,0,780,130),(6,0,685,115),(5,1,900,2217),(6,1,800,1986),(5,1,900,2111),(6,1,800,1891),(5,1,900,2010),(6,1,800,1801),(5,1,900,1914),(6,1,800,1715),(5,1,900,1823),(6,1,800,1633),(5,1,900,1736),(6,1,800,1555),(5,1,900,1653),(6,1,800,1481),(5,1,900,1574),(6,1,800,1410),(5,1,900,1499),(6,1,800,1343),(5,1,900,1428),(6,1,800,1279),(5,1,900,1360),(6,1,800,1218),(5,1,900,1295),(6,1,800,1160),(5,1,900,1233),(6,1,800,1105),(5,1,900,1174),(6,1,800,1052),(5,1,900,1118),(6,1,800,1002),(5,1,900,1065),(6,1,800,954),(5,1,900,1014),(6,1,800,909),(5,1,900,966),(6,1,800,866),(5,1,900,920),(6,1,800,825),(5,1,900,876),(6,1,800,786),(5,1,900,834),(6,1,800,749),(5,1,900,794),(6,1,800,713),(5,1,900,756),(6,1,800,679),(5,1,900,720),(6,1,800,647),(5,1,900,686),(6,1,800,616),(5,1,900,653),(6,1,800,587),(5,1,900,622),(6,1,800,559),(5,1,900,592),(6,1,800,532),(5,1,900,564),(6,1,800,507),(5,1,900,537),(6,1,800,483),(5,1,900,511),(6,1,800,460),(5,1,900,487),(6,1,800,438),(5,1,900,464),(6,1,800,417),(5,1,900,442),(6,1,800,397),(5,1,900,421),(6,1,800,378),(5,1,900,401),(6,1,800,360),(5,1,900,382),(6,1,800,343),(5,1,900,364),(6,1,800,327),(5,1,900,347),(6,1,800,311),(5,1,900,330),(6,1,800,296),(5,1,900,314),(6,1,800,282),(5,1,900,299),(6,1,800,269),(5,1,900,285),(6,1,800,256),(5,1,900,271),(6,1,800,244),(5,1,900,258),(6,1,800,232),(5,1,900,246),(6,1,800,221),(5,1,900,234),(6,1,800,210),(5,1,900,223),(6,1,800,200),(5,1,900,212),(6,1,800,190),(5,1,900,202),(6,1,800,181),(5,1,900,192),(6,1,800,172),(5,1,900,183),(6,1,800,164),(5,1,900,174),(6,1,800,156),(5,1,900,166),(6,1,800,149),(5,1,900,158),(6,1,800,142),(5,1,900,150),(6,1,800,135),(5,1,900,150),(6,1,800,135),(5,1,900,150),(6,1,800,135),(5,1,900,150),(6,1,800,135),(5,1,900,150),(6,1,800,135),(5,1,900,150),(6,1,800,135),(5,1,900,150),(6,1,800,135),(5,1,900,150),(6,1,800,135);
/*!40000 ALTER TABLE `rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rental`
--

DROP TABLE IF EXISTS `rental`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental` (
  `CustID` int NOT NULL,
  `VehicleID` varchar(20) NOT NULL,
  `StartDate` date NOT NULL,
  `OrderDate` date NOT NULL,
  `RentalType` int NOT NULL,
  `Qty` int DEFAULT '1',
  `ReturnDate` date NOT NULL,
  `TotalAmount` int NOT NULL,
  `PaymentDate` date DEFAULT NULL,
  KEY `VehicleID` (`VehicleID`),
  KEY `CustID_idx` (`CustID`),
  CONSTRAINT `CustID` FOREIGN KEY (`CustID`) REFERENCES `customer` (`CustID`),
  CONSTRAINT `VehicleID` FOREIGN KEY (`VehicleID`) REFERENCES `vehicle` (`VehicleID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental`
--

LOCK TABLES `rental` WRITE;
/*!40000 ALTER TABLE `rental` DISABLE KEYS */;
INSERT INTO `rental` VALUES (203,'JM3KE4DY4F0441471','2019-09-09','2019-05-22',1,4,'2019-09-13',460,'2019-09-09'),(210,'19VDE1F3XEE414842','2019-11-01','2019-10-28',7,2,'2019-11-15',1200,NULL),(210,'JTHFF2C26F135BX45','2019-05-01','2019-04-15',7,1,'2019-05-08',600,'2019-05-08'),(210,'JTHFF2C26F135BX45','2019-11-01','2019-10-28',7,2,'2019-11-15',1200,NULL),(210,'WAUTFAFH0E0010613','2019-11-01','2019-10-28',7,2,'2019-11-15',1200,NULL),(210,'WBA3A9G51ENN73366','2019-11-01','2019-10-28',7,2,'2019-11-15',1200,NULL),(210,'WBA3B9C59EP458859','2019-11-01','2019-10-28',7,2,'2019-11-15',1200,NULL),(210,'WDCGG0EB0EG188709','2019-11-01','2019-10-28',7,2,'2019-11-15',1200,NULL),(212,'19VDE1F3XEE414842','2019-06-10','2019-04-15',7,3,'2019-07-01',1800,'2019-06-10'),(216,'1N6BF0KM0EN101134','2019-08-02','2019-03-15',7,4,'2019-08-30',2740,'2019-08-02'),(216,'1N6BF0KM0EN101134','2019-08-30','2019-03-15',1,2,'2019-09-01',230,'2019-08-02'),(221,'19VDE1F3XEE414842','2019-07-01','2019-06-12',7,1,'2019-07-08',600,'2019-07-01'),(221,'19VDE1F3XEE414842','2019-07-09','2019-06-12',1,2,'2019-07-11',200,'2019-07-01'),(221,'19VDE1F3XEE414842','2020-01-01','2019-12-15',7,4,'2020-01-29',2400,NULL),(221,'JTHFF2C26F135BX45','2020-01-01','2019-12-15',7,4,'2020-01-29',2400,NULL),(221,'WAUTFAFH0E0010613','2019-07-01','2019-06-12',7,1,'2019-07-08',600,'2019-07-01'),(221,'WAUTFAFH0E0010613','2019-07-09','2019-06-12',1,2,'2019-07-11',200,'2019-07-01'),(221,'WAUTFAFH0E0010613','2020-01-01','2019-12-15',7,4,'2020-01-29',2400,NULL),(221,'WBA3A9G51ENN73366','2020-01-01','2019-12-15',7,4,'2020-01-29',2400,NULL),(221,'WBA3B9C59EP458859','2020-01-01','2019-12-15',7,4,'2020-01-29',2400,NULL),(221,'WDCGG0EB0EG188709','2020-01-01','2019-12-15',7,4,'2020-01-29',2400,NULL),(229,'19VDE1F3XEE414842','2019-05-06','2019-04-12',1,4,'2019-05-10',400,'2019-05-06'),(229,'WAUTFAFH0E0010613','2019-05-06','2019-04-12',1,4,'2019-05-10',400,'2019-05-06'),(472,'1FDEE3FL6EDA29122','2021-11-02','2021-11-29',6,1,'2021-11-09',4795,NULL),(472,'19VDE1F3XEE414842','2021-11-01','2021-11-30',1,1,'2021-11-08',4200,NULL),(472,'19VDE1F3XEE414842','2021-11-02','2021-11-30',1,1,'2021-11-04',3084,NULL),(472,'19VDE1F3XEE414842','2021-11-02','2021-11-30',1,1,'2021-11-04',3084,NULL),(472,'19VDE1F3XEE414842','2021-11-26','2021-11-30',1,1,'2021-11-27',1542,NULL),(472,'1VWCH7A3XEC037969','2021-11-17','2021-11-30',2,1,'2021-11-27',6600,NULL),(472,'2T3DFREV0FW317743','2021-12-02','2021-11-30',4,1,'2021-12-09',4795,NULL),(472,'1VWCH7A3XEC037969','2022-03-15','2021-11-30',2,1,'2022-03-22',4620,NULL),(472,'19VDE1F3XEE414842','2021-12-01','2021-12-01',7,1,'2021-12-08',4200,NULL),(472,'1FTNF1CF2EKE54305','2021-12-01','2021-12-01',1,1,'2021-12-02',130,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-08','2021-12-01',7,1,'2021-12-22',10920,NULL),(472,'1FDRF3B61FEA87469','2021-12-09','2021-12-01',7,1,'2021-12-22',10140,NULL),(472,'1FDRF3B61FEA87469','2021-12-01','2021-12-01',7,1,'2021-12-08',5460,NULL),(472,'19VDE1F3XEE414842','2021-12-01','2021-12-01',7,1,'2021-12-08',4200,NULL);
/*!40000 ALTER TABLE `rental` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `VehicleID` varchar(20) NOT NULL,
  `Description` varchar(45) NOT NULL,
  `Year` bigint NOT NULL,
  `Type` int NOT NULL,
  `Category` int NOT NULL,
  `timeslots` json DEFAULT NULL,
  PRIMARY KEY (`VehicleID`),
  UNIQUE KEY `VehicleID_UNIQUE` (`VehicleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES ('19VDE1F3XEE414842','Acura ILX',2014,1,1,NULL),('1FDEE3FL6EDA29122','Ford E 350',2014,6,0,NULL),('1FDRF3B61FEA87469','Ford Super Duty Pickup',2015,5,0,NULL),('1FTNF1CF2EKE54305','Ford F Series Pickup',2014,5,0,NULL),('1G1JD5SB3E4240835','Chevrolet Optra',2014,1,0,NULL),('1GB3KZCG1EF117132','Chevrolet Silverado',2014,5,0,NULL),('1HGCR2E3XEA305302','Honda Accord',2014,2,0,NULL),('1N4AB7AP2EN855026','Nissan Sentra',2014,1,0,NULL),('1N6BA0EJ9EN516565','Nissan Titan',2014,5,0,NULL),('1N6BF0KM0EN101134','Nissan NV',2014,6,0,NULL),('1VWCH7A3XEC037969','Volkswagen Passat',2014,2,1,NULL),('2HGFB2F94FH501940','Honda Civic',2015,1,0,NULL),('2T3DFREV0FW317743','Toyota RAV4',2015,4,0,NULL),('3MZBM1L74EM109736','Mazda 3',2014,1,0,NULL),('3N1CE2CP0FL409472','Nissan Versa Note',2015,1,0,NULL),('3N1CN7APXEK444458','Nissan Versa',2014,1,0,NULL),('3VW2A7AU1FM012211','Volkswagen Golf',2015,1,0,NULL),('4S4BRCFC1E3203823','Subaru Outback',2014,4,0,NULL),('4S4BSBF39F3261064','Subaru Outback',2015,4,0,NULL),('4S4BSELC0F3325370','Subaru Outback',2015,4,0,NULL),('5FNRL6H58KB133711','Honda Odyssey',2019,6,1,NULL),('5J6RM4H90FL028629','Honda CR-V',2015,4,0,NULL),('5N1AL0MM8EL549388','Infiniti JX35',2014,4,1,NULL),('5NPDH4AE2FH565275','Hyundai Elantra',2015,1,0,NULL),('5TDBKRFH4ES26D590','Toyota Highlander',2014,4,0,NULL),('5XYKT4A75FG610224','Kia Sorento',2015,4,0,NULL),('5XYKU4A7XFG622415','Kia Sorento',2015,4,0,NULL),('5XYKUDA77EG449709','Kia Sorento',2014,4,0,NULL),('JF1GPAA61F8314971','Subaru Impreza',2015,1,0,NULL),('JH4KC1F50EC800004','Acura RLX',2014,3,1,NULL),('JH4KC1F56EC000095','Acura RLX',2014,3,1,NULL),('JM1BM1V35E1210570','Mazda 3',2014,1,0,NULL),('JM3KE4DY4F0441471','Mazda CX5',2015,4,0,NULL),('JM3TB3DV0E0015742','Mazda CX9',2014,4,0,NULL),('JN8AS5MV0FW760408','Nissan Rogue Select',2015,4,0,NULL),('JTEZUEJR7E5081641','Toyota 4Runner',2014,4,0,NULL),('JTHBW1GG1F120DU53','Lexus ES 300h',2015,2,1,NULL),('JTHCE1BL3F151DE04','Lexus GS 350',2015,2,1,NULL),('JTHDL5EF9F5007221','Lexus LS 460',2015,3,1,NULL),('JTHFF2C26F135BX45','Lexus IS 250C',2015,1,1,NULL),('JTJHY7AX2F120EA11','Lexus LX 570',2015,4,1,NULL),('JTJJM7FX2E152CD75','Lexus GX460',2014,4,1,NULL),('JTMBFREV1FJ019885','Toyota RAV4',2015,4,0,NULL),('KM8SN4HF0FU107203','Hyundai Santa Fe',2015,4,0,NULL),('KMHJT3AF1FU028211','Hyundai Tucson',2015,4,0,NULL),('KMHTC6AD8EU998631','Hyundai Veloster',2014,1,0,NULL),('KNAFZ4A86E5195865','KIA Sportage',2014,4,0,NULL),('KNAFZ4A86E5195895','KIA Forte',2014,1,0,NULL),('KNAGN4AD2F5084324','Kia Optima Hybrid',2015,2,0,NULL),('KNALN4D75E5A57351','Kia Cadenza',2014,3,0,NULL),('KNALU4D42F6025717','Kia K900',2015,3,0,NULL),('KNDPCCA65F7791085','KIA Sportage',2015,4,0,NULL),('WA1LGAFE8ED001506','Audi Q7',2014,4,1,NULL),('WAU32AFD8FN005740','Audi A8',2015,3,1,NULL),('WAUTFAFH0E0010613','Audi A5',2014,1,1,NULL),('WBA3A9G51ENN73366','BMW 3 Series',2014,1,1,NULL),('WBA3B9C59EP458859','BMW 3 Series',2014,1,1,NULL),('WBAVL1C57EVR93286','BMW X1',2014,4,1,NULL),('WDCGG0EB0EG188709','Mercedes_Benz GLK',2014,1,1,NULL),('YV440MDD6F2617077','Volvo XC60',2015,4,1,NULL),('YV4940NB5F1191453','Volvo XC70',2015,4,1,NULL);
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-01 17:47:01
