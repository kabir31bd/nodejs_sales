# nodejs_sales

-- Table: public.Sales

-- DROP TABLE IF EXISTS public."Sales";

CREATE TABLE IF NOT EXISTS public."Sales"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    username character(50) COLLATE pg_catalog."default",
    amount numeric,
    date timestamp without time zone,
    CONSTRAINT "Sales_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Sales"
    OWNER to postgres;

GRANT ALL ON TABLE public."Sales" TO postgres WITH GRANT OPTION;
