# Generated by Django 4.0.3 on 2022-05-30 10:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fulalapp', '0004_joinstudentpadtable_pads_collected'),
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('password', models.CharField(max_length=50)),
                ('iflogged', models.BooleanField(default=False)),
                ('token', models.CharField(default='', max_length=500, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='studentregistrationdetails',
            name='regno',
        ),
    ]
