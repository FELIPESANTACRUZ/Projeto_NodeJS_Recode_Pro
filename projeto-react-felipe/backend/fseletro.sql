-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06-Fev-2021 às 02:47
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `msg`, `data`) VALUES
(4, 'Pedro Benedito', 'Muito atenciosos e prestativos, loja muito boa.', '2021-01-16 19:05:33'),
(5, 'Francisca Silveira Barros', 'Compre sem medo, produtos maravilhosos, recomendo.', '2021-01-27 09:39:50'),
(6, 'Vitória Ferreira', 'Produtos excelentes e rapidez na entrega! Vou voltar sempre.', '2021-01-27 21:07:18'),
(7, 'oi', 'oi', '2021-02-05 21:47:21');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `preco_venda` decimal(8,2) DEFAULT NULL,
  `imagem` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`idproduto`, `categoria`, `descricao`, `preco`, `preco_venda`, `imagem`) VALUES
(1, 'geladeira', 'Geladeira Frost Free Brastemp Side Inverse', '3000.00', '2000.00', 'img/gel_brastemp_frost.png'),
(2, 'geladeira', 'Geladeira Brastemp Frost Free Branca 350L', '5000.00', '4000.00', 'img/gel_brastemp_side.png'),
(3, 'geladeira', 'Geladeira Brastemp Frost Free Duplex 375 litros', '6000.00', '5500.00', 'img/gel_consul_prata.png'),
(4, 'fogao', 'Fogão 4 bocas Consul Inox com mesa de vidro', '2000.00', '1000.00', 'img/fog_consul_inox.png'),
(5, 'fogao', 'Fogão 4 bocas Atlas Monaco', '2000.00', '1000.00', 'img/fog_atlas_monaco.png'),
(6, 'microondas', 'Micro-ondas Consul Inox 32L 220v', '2000.00', '1300.00', 'img/micro_consul_inox.png'),
(7, 'microondas', 'Micro-ondas Philco Espelhado 25L 220v', '2500.00', '1000.00', 'img/micro_eletrolux_bco.jpg'),
(8, 'microondas', 'Micro-ondas Eletrolux Branco de 20L', '1100.00', '1000.00', 'img/micro_philco_espelhado.png'),
(9, 'lavadoura', 'Lavadoura de Roupas Brastemp 11kg', '1500.00', '1100.00', 'img/lavadora_brastemp.png'),
(10, 'lavadoura', 'Lavadoura de Roupas Philco Inverter 12kg', '3000.00', '2800.00', 'img/lavadora_philco_inverter.png'),
(11, 'lavaLouca', 'Lava-Louças Eletrolux Inox com 10 serviços', '2890.00', '2600.00', 'img/lava_louca_brastemp.png'),
(12, 'lavaLouca', 'Lava-Louças Brastemp compacta 8 serviços', '3000.00', '2800.00', 'img/lava_louca_eletrolux.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `idProduto` int(11) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `sobrenome` varchar(25) NOT NULL,
  `cpf` varchar(25) NOT NULL,
  `cep` int(50) NOT NULL,
  `telefone` bigint(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`idproduto`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `idProduto` (`idProduto`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `produto`
--
ALTER TABLE `produto`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`idProduto`) REFERENCES `produto` (`idproduto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;