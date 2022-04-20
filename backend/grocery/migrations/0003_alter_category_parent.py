# Generated by Django 4.0.4 on 2022-04-20 05:48

from django.db import migrations
import django.db.models.deletion
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0002_alter_category_table_alter_product_table_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='parent',
            field=mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='grocery.category'),
        ),
    ]