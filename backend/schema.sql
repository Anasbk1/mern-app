-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(85) NOT NULL,
  `email` VARCHAR(245) NOT NULL,
  `image` VARCHAR(455) NOT NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`barber`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`barber` (
  `idbarber` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(445) NOT NULL,
  `email` VARCHAR(445) NOT NULL,
  `description` VARCHAR(545) NOT NULL,
  `location` VARCHAR(545) NOT NULL,
  PRIMARY KEY (`idbarber`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`posts` (
  `idposts` INT NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(445) NOT NULL,
  `content` VARCHAR(545) NOT NULL,
  `barber_idbarber` INT NOT NULL,
  PRIMARY KEY (`idposts`),
  INDEX `fk_posts_barber1_idx` (`barber_idbarber` ASC) VISIBLE,
  CONSTRAINT `fk_posts_barber1`
    FOREIGN KEY (`barber_idbarber`)
    REFERENCES `mydb`.`barber` (`idbarber`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`likes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`likes` (
  `idlikes` INT NOT NULL AUTO_INCREMENT,
  `users_idusers` INT NOT NULL,
  `posts_idposts` INT NOT NULL,
  PRIMARY KEY (`idlikes`),
  INDEX `fk_likes_users_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_likes_posts1_idx` (`posts_idposts` ASC) VISIBLE,
  CONSTRAINT `fk_likes_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_likes_posts1`
    FOREIGN KEY (`posts_idposts`)
    REFERENCES `mydb`.`posts` (`idposts`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reviews` (
  `idreviews` INT NOT NULL AUTO_INCREMENT,
  `rate` INT NOT NULL,
  `comments` VARCHAR(45) NOT NULL,
  `users_idusers` INT NOT NULL,
  `barber_idbarber` INT NOT NULL,
  PRIMARY KEY (`idreviews`),
  INDEX `fk_reviews_users1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_reviews_barber1_idx` (`barber_idbarber` ASC) VISIBLE,
  CONSTRAINT `fk_reviews_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mydb`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reviews_barber1`
    FOREIGN KEY (`barber_idbarber`)
    REFERENCES `mydb`.`barber` (`idbarber`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(85) NOT NULL,
  `email` VARCHAR(445) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;