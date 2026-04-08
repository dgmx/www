-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mariadb
-- Tiempo de generación: 08-04-2025 a las 14:39:14
-- Versión del servidor: 11.3.2-MariaDB-1:11.3.2+maria~ubu2204
-- Versión de PHP: 8.2.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mngmnt`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Artista`
--

CREATE TABLE `Artista` (
  `nif` varchar(15) NOT NULL COMMENT 'NIF único del artista',
  `nombre` varchar(15) NOT NULL,
  `id_manager` int(11) NOT NULL COMMENT 'FK - ID del mánager que representa al artista',
  `apellidos` varchar(60) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `nombre_artistico` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de Artistas';

--
-- Volcado de datos para la tabla `Artista`
--

INSERT INTO `Artista` (`nif`, `nombre`, `id_manager`, `apellidos`, `telefono`, `nombre_artistico`) VALUES
('12345678A', 'María', 1, 'García López', '611223344', 'Mari G.'),
('23456789G', 'Sofía', 3, 'Sánchez Jiménez', '677889900', 'Sofi S.'),
('32165498D', 'Javier', 1, 'González Pérez', '644556677', 'Javi G.'),
('34567891I', 'Elena', 4, 'Díaz Romero', '699001122', 'Elen D.'),
('45678912C', 'Ana', 3, 'Fernández Sánchez', '633445566', 'Anita F.'),
('65498732F', 'David', 2, 'López Martín', '666778899', 'Davi L.'),
('78912345E', 'Laura', 4, 'Rodríguez Gómez', '655667788', 'Lau R.'),
('87654321H', 'Pablo', 5, 'Hernández Castro', '688990011', 'Pablito H.'),
('91234567J', 'Miguel', 5, 'Moreno Alonso', '600112233', 'Migue M.'),
('98765432B', 'Carlos', 2, 'Martínez Ruiz', '622334455', 'Carlo M.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Evento`
--

CREATE TABLE `Evento` (
  `id_evento` int(11) NOT NULL,
  `fecha_celebracion` date DEFAULT NULL COMMENT 'Fecha de celebración del evento',
  `num_asistentes` int(11) DEFAULT 0 COMMENT 'Número de asistentes al evento',
  `precio` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de Eventos de Promoción';

--
-- Volcado de datos para la tabla `Evento`
--

INSERT INTO `Evento` (`id_evento`, `fecha_celebracion`, `num_asistentes`, `precio`) VALUES
(1, '2024-05-15', 120, 49.99),
(2, '2024-06-22', 85, 35.50),
(3, '2024-07-04', 200, 75.00),
(4, '2024-08-12', 65, 29.99),
(5, '2024-09-30', 150, 59.99),
(6, '2024-10-18', 180, 65.00),
(7, '2024-11-05', 95, 42.50),
(8, '2024-12-15', 250, 89.99),
(9, '2025-01-20', 70, 32.00),
(10, '2025-02-14', 300, 99.99);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Manager`
--

CREATE TABLE `Manager` (
  `id_manager` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL COMMENT 'Nombre del mánager',
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de Mánagers';

--
-- Volcado de datos para la tabla `Manager`
--

INSERT INTO `Manager` (`id_manager`, `nombre`, `email`, `telefono`) VALUES
(1, 'Juan Pérez', 'juan@example.com', '555-1001'),
(2, 'María García', 'maria@example.com', '555-1002'),
(3, 'Carlos López', 'carlos@example.com', '555-1003'),
(4, 'Ana Martínez', 'ana@example.com', '555-1004'),
(5, 'Luis Rodríguez', 'luis@example.com', '555-1005'),
(6, 'Sofía Hernández', 'sofia@example.com', '555-1006'),
(7, 'Pedro Díaz', 'pedro@example.com', '555-1007'),
(8, 'Laura Sánchez', 'laura@example.com', '555-1008'),
(9, 'Jorge Ramírez', 'jorge@example.com', '555-1009'),
(10, 'Elena Flores', 'elena@example.com', '555-1010');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Participa`
--

CREATE TABLE `Participa` (
  `artista_nif` varchar(15) NOT NULL COMMENT 'FK - NIF del artista participante',
  `evento_id` int(11) NOT NULL COMMENT 'FK - ID del evento en que participa'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de Participación Artista-Evento (Relación N:M)';

--
-- Volcado de datos para la tabla `Participa`
--

INSERT INTO `Participa` (`artista_nif`, `evento_id`) VALUES
('78912345E', 1),
('45678912C', 2),
('12345678A', 3),
('23456789G', 4),
('32165498D', 5),
('34567891I', 6),
('98765432B', 7),
('65498732F', 8),
('91234567J', 9),
('87654321H', 10);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Artista`
--
ALTER TABLE `Artista`
  ADD PRIMARY KEY (`nif`),
  ADD KEY `id_manager` (`id_manager`);

--
-- Indices de la tabla `Evento`
--
ALTER TABLE `Evento`
  ADD PRIMARY KEY (`id_evento`);

--
-- Indices de la tabla `Manager`
--
ALTER TABLE `Manager`
  ADD PRIMARY KEY (`id_manager`);

--
-- Indices de la tabla `Participa`
--
ALTER TABLE `Participa`
  ADD PRIMARY KEY (`artista_nif`,`evento_id`),
  ADD KEY `evento_id` (`evento_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Evento`
--
ALTER TABLE `Evento`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `Manager`
--
ALTER TABLE `Manager`
  MODIFY `id_manager` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Artista`
--
ALTER TABLE `Artista`
  ADD CONSTRAINT `Artista_ibfk_1` FOREIGN KEY (`id_manager`) REFERENCES `Manager` (`id_manager`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `Participa`
--
ALTER TABLE `Participa`
  ADD CONSTRAINT `Participa_ibfk_1` FOREIGN KEY (`artista_nif`) REFERENCES `Artista` (`nif`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Participa_ibfk_2` FOREIGN KEY (`evento_id`) REFERENCES `Evento` (`id_evento`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
