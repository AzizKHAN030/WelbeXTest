--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

-- Started on 2021-12-31 22:45:37

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16396)
-- Name: cities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    date date DEFAULT CURRENT_DATE NOT NULL,
    name character varying(255),
    population integer,
    distance integer
);


ALTER TABLE public.cities OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cities_id_seq OWNER TO postgres;

--
-- TOC entry 3313 (class 0 OID 0)
-- Dependencies: 209
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- TOC entry 3163 (class 2604 OID 16399)
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- TOC entry 3307 (class 0 OID 16396)
-- Dependencies: 210
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.cities (id, date, name, population, distance) VALUES (1, '2021-12-30', 'tashkent', 2393000, 0);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (2, '2021-12-30', 'andijan', 416243, 353);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (3, '2021-12-30', 'namangan', 475700, 313);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (4, '2021-12-30', 'samarqand', 517666, 574);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (5, '2021-12-30', 'angren', 123145, 124);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (6, '2021-12-30', 'qarshi', 245156, 417);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (7, '2021-12-30', 'bukhara', 515234, 517);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (8, '2021-12-30', 'termez', 675036, 875);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (9, '2021-12-30', 'navoi', 426357, 745);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (10, '2021-12-30', 'kokand', 147521, 315);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (11, '2021-12-30', 'djizzakh', 154687, 687);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (12, '2021-12-30', 'urgench', 135157, 442);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (13, '2021-12-30', 'nukus', 295656, 889);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (14, '2021-12-30', 'moskow', 11921360, 3376);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (15, '2021-12-30', 'saint-petersburg', 4991125, 4130);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (16, '2021-12-30', 'new-york', 8419256, 10165);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (17, '2021-12-30', 'alaska', 731545, 7798);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (18, '2021-12-30', 'forks', 3828, 10458);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (19, '2021-12-30', 'san francisco', 874961, 11136);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (20, '2021-12-30', 'los angeles', 3967156, 11594);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (21, '2021-12-31', 'rome', 2873015, 6399);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (22, '2021-12-31', 'monaco', 39244, 6428);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (23, '2021-12-31', 'paris', 2161547, 6202);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (24, '2021-12-31', 'prague', 1309156, 5298);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (25, '2021-12-31', 'warsaw', 1765254, 4620);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (26, '2021-12-31', 'istanbul', 15460154, 4652);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (27, '2021-12-31', 'antalya', 945049, 4662);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (28, '2021-12-31', 'london', 8982156, 6247);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (29, '2021-12-31', 'astana', 1002156, 1730);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (30, '2021-12-31', 'osh', 256763, 413);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (31, '2021-12-31', 'almaty', 1777156, 810);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (33, '2021-12-31', 'pekin', 21542615, 3933);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (32, '2021-12-31', 'delhi', 18981562, 1570);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (34, '2021-12-31', 'tokyo', 13962156, 5993);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (35, '2021-12-31', 'dubai', 3331556, 4517);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (36, '2021-12-31', 'las vegas', 634773, 11382);
INSERT INTO public.cities (id, date, name, population, distance) VALUES (37, '2021-12-31', 'tokyo', 37843000, 5987);


--
-- TOC entry 3314 (class 0 OID 0)
-- Dependencies: 209
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cities_id_seq', 37, true);


--
-- TOC entry 3166 (class 2606 OID 16402)
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


-- Completed on 2021-12-31 22:45:37

--
-- PostgreSQL database dump complete
--

