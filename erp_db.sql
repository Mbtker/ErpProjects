-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 18, 2024 at 02:22 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `erp_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `objectdata`
--

CREATE TABLE `objectdata` (
  `id` int(11) NOT NULL,
  `objectType` int(11) NOT NULL,
  `objectUserCode` varchar(250) DEFAULT NULL,
  `objectEnDescription` varchar(250) NOT NULL,
  `objectArDescription` varchar(250) NOT NULL,
  `objectArShortDescription` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `objectdata`
--

INSERT INTO `objectdata` (`id`, `objectType`, `objectUserCode`, `objectEnDescription`, `objectArDescription`, `objectArShortDescription`) VALUES
(1, 1, NULL, 'Al-Riyadh', 'الرياض', NULL),
(6, 2, NULL, 'Saudi', 'سعودي', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `objecttype`
--

CREATE TABLE `objecttype` (
  `id` int(11) NOT NULL,
  `objectTypeEnDesc` varchar(250) NOT NULL,
  `objectTypeArDesc` varchar(250) NOT NULL,
  `securityDataType` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `objecttype`
--

INSERT INTO `objecttype` (`id`, `objectTypeEnDesc`, `objectTypeArDesc`, `securityDataType`) VALUES
(1, 'Cities', 'المدن', NULL),
(2, 'Nationality', 'الجنسية', ''),
(5, 'en', 'ar', '1'),
(6, 'aa', 'aa', '1'),
(7, 'rr', 'rr', NULL),
(8, 'ert', 'rt', '1'),
(9, 'vvf', 'vv', '1'),
(10, '12', '12', NULL),
(11, '444', '888', '1'),
(12, 'ff', 'fff33', NULL),
(13, 'dfg', 'gdfg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Username` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `Status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Name`, `Username`, `Password`, `Status`) VALUES
(1, 'Mohammad', '1', '1', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `objectdata`
--
ALTER TABLE `objectdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `objecttype`
--
ALTER TABLE `objecttype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `objectdata`
--
ALTER TABLE `objectdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `objecttype`
--
ALTER TABLE `objecttype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
